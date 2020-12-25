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

/**
 * Get current date/time in YYYY-MM-DD HH:MM:SS format.
 *
 * @returns {string} e.g. 2020-12-16 13:47:40
 *
 * @see https://usefulangle.com/post/187/nodejs-get-date-time
 */
function getDateTime () {
  const dateObject = new Date()
  const date = ('0' + dateObject.getDate()).slice(-2)
  const month = ('0' + (dateObject.getMonth() + 1)).slice(-2)
  const year = dateObject.getFullYear()
  const hours = ('0' + dateObject.getHours()).slice(-2)
  const minutes = ('0' + dateObject.getMinutes()).slice(-2)
  const seconds = ('0' + dateObject.getSeconds()).slice(-2)
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
}

module.exports = {
  onlyUnique,
  getDateTime
}
