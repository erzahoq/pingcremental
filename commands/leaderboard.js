const { SlashCommandBuilder, EmbedBuilder, InteractionContextType, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const database = require('./../helpers/database.js')
const sequelize = require('sequelize')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('check who\'s best')
        .setContexts(InteractionContextType.BotDM, InteractionContextType.Guild, InteractionContextType.PrivateChannel),
    async execute(interaction) {
        await interaction.reply({ embeds: [ new EmbedBuilder().setDescription('one sec...') ] });
        await interaction.editReply(await getMessage(interaction)); // add (edited) so it doesn't move after refresh
    },
    buttons: {
        refresh: (async interaction => {
            await interaction.update(await getMessage(interaction));
        })
    }
}

async function getMessage(interaction) {
    let description = "*leaderboard updates every minute*\n";
    const lbPlayers = await database.LeaderboardPlayer.findAll({
        order: [
            ['position', 'ASC'],
        ]
    });

    const leaderboardEmojis = [
        "<:rank_1:1363227127197077745>",
        "<:rank_2:1363227134881042685>",
        "<:rank_3:1363227143005409360>",
        "<:rank_4:1363227150446231622>",
        "<:rank_5:1363227158331265205>",
        "<:rank_6:1363227168309514352>",
        "<:rank_7:1363227175997935757>",
        "<:rank_8:1363227183782432869>",
        "<:rank_9:1363227190942241040>",
        "<:rank_10:1363227198080942220>",
    ]
    
    for (player of lbPlayers) {
        const puser = await interaction.client.users.fetch(player.userId)
        description += 
`
${leaderboardEmojis[Math.min(leaderboardEmojis.length, player.position)-1]} **${puser.username.replaceAll("_","\\_")}** - \`${formatNumber(player.score)} pts\` total`
    }

    const embed = new EmbedBuilder()
        .setTitle("leaderboard")
        .setColor('#9c8e51')
        .setDescription(description)
    const button = new ButtonBuilder()
        .setCustomId('leaderboard:refresh')
        .setLabel('refresh')
        .setStyle(ButtonStyle.Secondary)
    const row = new ActionRowBuilder()
        .addComponents(button)
    return {
        contents: "",
        embeds: [embed],
        components: [row]
    }
}

function formatNumber(num) { //i'd never steal existing code
    const numStr = num.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
