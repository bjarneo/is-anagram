module.exports = function isAnagram(str, cmp) {
    if (typeof str !== 'string' || typeof cmp !== 'string') {
        return false;
    }

    const mainWord = str.toLowerCase().split('').sort();
    const cmpWord = cmp.toLowerCase().split('').sort();

    if (mainWord.length !== cmpWord.length) {
        return false;
    }

    const isAna = mainWord.some(char => cmpWord.indexOf(char) > -1);

    if (!isAna) {
        return false;
    }

    return true;
};