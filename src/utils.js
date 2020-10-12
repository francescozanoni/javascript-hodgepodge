'use strict'

/**
 * Callback that removes duplications from an array.
 *
 * Example usage:
 *   var myArray = ['a', 1, 'a'];
 *   var myUniqueArray = myArray.filter(onlyUnique);
 *
 * @param {*} item one of the items of the array
 * @param {number} index 0-based position of the item within the array
 * @param {Array} array array whose items must be made unique
 *
 * @returns {boolean}
 *
 * @see https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 */
function onlyUnique (item, index, array) {
  const arrayOfJsonizedItems = array.map(JSON.stringify)
  const jsonizedItem = JSON.stringify(item)
  return arrayOfJsonizedItems.indexOf(jsonizedItem) === index
}

module.exports = {
  onlyUnique: onlyUnique
}
