const UpgradeTypes = require('../helpers/upgradeEnums.js');

module.exports = {
    getPrice(currentLevel) {
        return currentLevel === 0 ? 3000 : null
    },
    getDetails() {
        return {
            description: "getting a rare ping message gives 100x pts",
            name: "i feel special",
            emoji: "<:upgrade_special:1361881463859187793>",
        }
    },
    getEffectString(level) {
        return level === 0 ? "1x" : "100x"
    },
    getEffect(level, context) {
        return {
            multiply: context.rare ? 100 : 1,
            message: context.rare ? "WHOA!" : null,
        }
    },
    isBuyable(context) {
        return true;
    },
    sortOrder() { return 100 },
    type() { return UpgradeTypes.ONE_TIME }
}