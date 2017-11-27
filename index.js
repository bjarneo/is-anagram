/**
 * Returns true or false based on if two strings are anagrams
 *
 * @param {string} str The main word / phrase
 * @param {number} cmp The word / phrase to compare
 * @return {boolean} if the two words / phrases are anagrams
 */
module.exports = function isAnagram(str, cmp) {
    if (typeof str !== 'string' || typeof cmp !== 'string') {
        return false;
    }

    const mainWord = str
        .toLowerCase()
        .split('')
        .sort();
    const cmpWord = cmp
        .toLowerCase()
        .split('')
        .sort();

    if (mainWord.length !== cmpWord.length) {
        return false;
    }

    let i = 0;
    while (i < mainWord.length) {
        if (cmpWord.indexOf(mainWord[i]) === -1) {
            return false;
        }

        i++;
    }

    return true;
};
