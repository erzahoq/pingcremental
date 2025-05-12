function formatNumber(num, shortHand = false, decimalPlaces = 2) {
    if (num === null || num === undefined) return '0';

    const numStr = num.toString();

    const suffixes = [
        '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', // 10^0 to 10^33
        'Dc', 'Ud', 'Dd', 'Td', 'Qd', 'Qn', 'Vg', 'Tg', 'Qag', 'Qig', // 10^36 to 10^66
        'Sxg', 'Spg', 'Ocg', 'Nog', 'Ctg', 'Ucg', 'Dcg', 'Tcg', 'Qacg', 'Qicg', // 10^69 to 10^99
    ];

    // Handle scientific notation or large exponents
    if (numStr.includes("e") || num >= 1e100) {
        const magnitude = Math.floor(Math.log10(num));
        if (magnitude >= 100) {
            return num.toExponential(decimalPlaces); // use e for 1e100 and above
        }

        const suffixIndex = Math.floor(magnitude / 3);
        const baseNum = (num / Math.pow(10, suffixIndex * 3)).toFixed(decimalPlaces);
        return baseNum + (suffixes[suffixIndex] || `e${magnitude}`);
    }

    if (numStr.length < 4) return numStr;

    const suffixIndex = Math.floor((numStr.length - 1) / 3);
    if (decimalPlaces >= suffixIndex * 3) {
        decimalPlaces = suffixIndex * 3;
        shortHand = false;
    }

    if (!shortHand) {
        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const baseNum = (
        Math.ceil((num * (10 ** (decimalPlaces + 1)) / Math.pow(10, suffixIndex * 3))) /
        (10 ** (decimalPlaces + 1))
    ).toFixed(decimalPlaces);

    return baseNum + (suffixes[suffixIndex] || `e${suffixIndex * 3}`);
}

module.exports = formatNumber;
