'use strict'

const fetch = require('node-fetch')

const urls = require('./config/iban-urls')
const ibanPattern = /[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/

async function cleanIban(iban) {
  return iban.toUpper().replace(/\W/g, '')
}

Promise.all(urls.map(url => fetch(url)))
  .then(responses => Promise.all(responses.map(response => response.text()))
  // Extract raw IBANs from HTML pages: one IBAN array per page.
    .then(bodies => bodies.map(body => body.match(new RegExp(ibanPattern, 'g'))))
  )
  // Clean raw IBANs within each array.
  .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => cleanIban(iban))))
  // Merge all IBAN arrays.
  .then(ibanArrays => new Set([].concat(...ibanArrays)))
  .then(ibanSet => console.log(ibanSet.size))
