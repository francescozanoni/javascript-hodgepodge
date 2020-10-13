'use strict'

const fetch = require('node-fetch')

const utils = require('../utils')
const urls = require('./iban-urls.json')

const ibanPattern = /[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/

/**
 * @param {array<string>} urls
 *
 * @returns {Promise<array<string>>}
 */
function fetchIbans (urls) {
  return Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.text()))
      // Extract raw IBANs from HTML pages: one IBAN array per page.
      .then(bodies => bodies.map(body => body.match(new RegExp(ibanPattern, 'g'))))
    )
    // Clean raw IBANs within each array.
    .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => iban.toUpperCase().replace(/[\W_]/g, ''))))
    // Merge all IBAN arrays, keep only unique values and sort items.
    .then(ibanArrays => [].concat(...ibanArrays).filter(utils.onlyUnique).sort())
    .catch(error => console.error(error))
}

(async function () {
  fetchIbans(urls)
    .then(ibans => console.log(ibans))
    .catch(error => console.error(error))
})()
