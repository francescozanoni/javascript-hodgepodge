'use strict'

const fetch = require('node-fetch')

const ibanPattern = /[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/

/**
 * Callback that makes unique the items of an array.
 *
 * Example usage:
 *   var myArray = ['a', 1, 'a'];
 *   var myUniqueArray = myArray.filter(onlyUnique);
 *
 * @param arrayItem one of the items of the array
 * @param {number} arrayIndex
 * @param {Array} arrayToMakeUnique
 *
 * @returns {boolean}
 *
 * @see https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 */
function onlyUnique (arrayItem, arrayIndex, arrayToMakeUnique) {
  const arrayOfJsonizedItems = arrayToMakeUnique.map(JSON.stringify)
  const jsonizedItem = JSON.stringify(arrayItem)
  return arrayOfJsonizedItems.indexOf(jsonizedItem) === arrayIndex
}

/**
 * @param {Array<string>} urls
 *
 * @returns {Promise<Array<string>>}
 */
module.exports = function (urls) {
  return Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.text()))
    // Extract raw IBANs from HTML pages: one IBAN array per page.
      .then(bodies => bodies.map(body => body.match(new RegExp(ibanPattern, 'g'))))
    )
  // Clean raw IBANs within each array.
    .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => iban.toUpperCase().replace(/[\W_]/g, ''))))
  // Merge all IBAN arrays, keep only unique values and sort items.
    .then(ibanArrays => [].concat(...ibanArrays).filter(onlyUnique).sort())
    .catch(error => console.error(error))
}
