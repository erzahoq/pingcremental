const UpgradeTypes = require('../helpers/upgradeEnums.js');

module.exports = {
    getPrice(currentLevel) {
        return Math.round(100*((3+(currentLevel*0.1))**currentLevel))
    },
    getDetails() {
        return {
            description: "gain __+2^(level-1)__ pts",
            name: "pinginomial",
            emoji: "<:upgrade_pinginomial:1361887876413001770>",
        }
    },
    getEffectString(level) {
        return level === 0 ? "+0" : `+${2**(level-1)}`
    },
    getEffect(level, context) {
        return {
            add: 2**(level-1),
        }
    },
    isBuyable(context) {
        return true;
    },
    sortOrder() { return 3 },
    type() { return UpgradeTypes.ADD_BONUS }
}