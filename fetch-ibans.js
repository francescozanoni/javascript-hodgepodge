'use strict'

const fetch = require('node-fetch')

const ibanPattern = /[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/

async function cleanIban (iban) {
  return iban.toUpperCase().replace(/[\W_]/g, '')
}

/**
 * @see https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 */
function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

module.exports = function (urls) {
  return Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.text()))
    // Extract raw IBANs from HTML pages: one IBAN array per page.
      .then(bodies => bodies.map(body => body.match(new RegExp(ibanPattern, 'g'))))
    )
  // Clean raw IBANs within each array.
    .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => cleanIban(iban))))
  // Merge all IBAN arrays, keep only unique values and sort.
    .then(ibanArrays => [].concat(...ibanArrays).filter(onlyUnique).sort())
    .catch(error => console.error(error))
}
