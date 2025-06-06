const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, InteractionContextType, MessageFlags } = require('discord.js');
const upgrades = require('./../helpers/upgrades.js')
const database = require('./../helpers/database.js');
const UpgradeTypes = require('./../helpers/upgradeEnums.js');
const formatNumber = require('./../helpers/formatNumber.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('upgrade')
        .setDescription('get stronger pings')
        .setContexts(InteractionContextType.BotDM, InteractionContextType.Guild, InteractionContextType.PrivateChannel),
    async execute(interaction) {
        await interaction.reply(await getEditMessage(interaction, UpgradeTypes.ADD_BONUS));
    },
    buttons: {
        delete: (async interaction => {
            await interaction.update({ content: "(bye!)", components: [] });
            await interaction.deleteReply(interaction.message);
        }),
        category: (async (interaction, newCategory) => {
            await interaction.update(await getEditMessage(interaction, newCategory));
        })
    },
    dropdowns: {
        buy: (async interaction => {
            const upgradeId = interaction.values[0];
            if (upgradeId === 'none') return await interaction.reply({ content: 'you already got everything!', tags: MessageFlags.Ephemeral });
            const playerData = await database.Player.findByPk(`${interaction.user.id}`);

            const playerUpgradeLevel = playerData.upgrades[upgradeId] ?? 0;
            const upgradeClass = upgrades[upgradeId];
            const price = upgradeClass.getPrice(playerUpgradeLevel);

            // player is poor (L)
            if (price > playerData.score) {
                const msg = ['dang!', 'oops!', 'awh!', 'ack!', 'sad!']

                const button = new ButtonBuilder()
                    .setCustomId('upgrade:delete')
                    .setLabel(msg[Math.floor(Math.random() * msg.length)]) // random sad message
                    .setStyle(ButtonStyle.Secondary)

                await interaction.update(await getEditMessage(interaction, upgradeClass.type())); // fix dropdown remaining after failed upgrade
                return await interaction.followUp({
                    content: `you dont have enough \`pts\` to afford that! (missing \`${formatNumber(price - playerData.score)} pts\`)`,
                    components: [new ActionRowBuilder().addComponents(button)]
                })
            }

            // update player data
            playerData.score -= price;
            playerData.upgrades[upgradeId] = playerUpgradeLevel + 1;
            playerData.changed('upgrades', true) // this is a hacky way to set the upgrades field, but it works
            await playerData.save();

            const msg = ['sweet!', 'nice!', 'sick!', 'cool!', 'neat!', 'nifty!', 'yippee!', 'awesome!'];

            const button = new ButtonBuilder()
                .setCustomId('upgrade:delete')
                .setLabel(msg[Math.floor(Math.random() * msg.length)]) // random happy message
                .setStyle(ButtonStyle.Success)

            await interaction.update(await getEditMessage(interaction, upgradeClass.type()));

            return await interaction.followUp({
                content: `upgraded **${upgradeClass.getDetails().name}** to level ${playerUpgradeLevel + 1}! you've \`${formatNumber(playerData.score)} pts\` left.`,
                components: [new ActionRowBuilder().addComponents(button)]
            })
        })
    }
}

async function getEditMessage(interaction, category) {
    const [playerData, _created] = await database.Player.findOrCreate({ where: { userId: interaction.user.id } })
    if (playerData.clicks < 150) { // prevent upgrading before 150 clicks
        const button = new ButtonBuilder()
            .setCustomId('upgrade:delete')
            .setLabel('oh... okay')
            .setStyle(ButtonStyle.Secondary)
        return {
            content: `*upgrades? what upgrades? you should go back to pinging.*\n-# (${playerData.clicks}/150)`,
            components: [new ActionRowBuilder().addComponents(button)]
        }
    }

    const buttonRow = new ActionRowBuilder();
    // loop through all upgrade categories and add buttons for each one
    for (const [_key, cat] of Object.entries(UpgradeTypes)) {
        if (cat === UpgradeTypes.PRESTIGE && !playerData.upgrades?.pingularity) continue; // prevent seing prestige tab before unlock
        const button = new ButtonBuilder()
            .setCustomId(`upgrade:category-${cat}`)
            .setLabel(cat)
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(category === cat)
        buttonRow.addComponents(button)
    }

    const pUpgrades = playerData.upgrades

    const select = new StringSelectMenuBuilder()
        .setCustomId('upgrade:buy')
        .setPlaceholder('pick an upgrade')
    let description = `you have **__\`${formatNumber(playerData.score)} pts\`__** to spend...`
    const embed = new EmbedBuilder()
        .setTitle("upgrades")
        .setColor("#73c9ae")

    for (const [upgradeId, upgrade] of Object.entries(upgrades)) {
        // go through each upgrade and check if should be displayed
        const upgradeLevel = pUpgrades[upgradeId] ?? 0
        if (upgrade.type() != category) continue; // wrong category
        if (!upgrade.isBuyable({ upgrades: pUpgrades, clicks: playerData.clicks })) continue; // hidden
        if (upgrade.getPrice(upgradeLevel) === null) { // maxed out
            description += `\n**${upgrade.getDetails().emoji} ${upgrade.getDetails().name} (MAX)**\n${upgrade.getDetails().description}\nCurrently ${upgrade.getEffectString(upgradeLevel)}`
            continue;
        }

        description += `\n**${upgrade.getDetails().emoji} ${upgrade.getDetails().name} (Lv${upgradeLevel})**
${upgrade.getDetails().description}
${upgrade.getEffectString(upgradeLevel)} -> ${upgrade.getEffectString(upgradeLevel + 1)} for \`${formatNumber(upgrade.getPrice(upgradeLevel), true)} pts\``

        select.addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel(`${upgrade.getDetails().name} | ${formatNumber(upgrade.getPrice(upgradeLevel), true)} pts`)
                .setValue(upgradeId)
        )
    }

    // add a default option if there are no options
    if (select.options.length === 0) {
        select.addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('upgrades are maxed!')
                .setValue('none')
                .setDefault(true)
        )
    }

    embed.setDescription(description)
    return { embeds: [embed], components: [buttonRow, new ActionRowBuilder().addComponents(select)] }
}