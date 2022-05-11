const transpose = require('./transpose')

const wordSearch = (letters, word) => { 
    if (typeof letters === 'undefined' || typeof word === 'undefined') return false;
    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (row of horizontalJoin) {
        if (row.includes(word)) {
            return true;
        } 
    }  
    const verticalMatrix = transpose(letters)
    const verticalJoin = verticalMatrix.map(ls => ls.join(''))
    for (row of verticalJoin) {
        if (row.includes(word)) {
            return true;
        } 
    }  
    return false;
}

module.exports = wordSearch
