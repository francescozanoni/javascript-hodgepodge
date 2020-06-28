'use strict'

const fetch = require('node-fetch')

const urls = require('./config/iban-urls')

Promise.all(urls.map(url => fetch(url)))
// Extract raw IBANs from HTML pages: one IBAN array per page.
  .then(responses => Promise.all(responses.map(response => response.text()))
    .then(bodies => bodies.map(body => body.match(/[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/g)))
  )
  // Clean raw IBANs.
  .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => iban.replace(/\W/g, ''))))
  // Merge all IBAN arrays.
  .then(ibanArrays => new Set([].concat(...ibanArrays)))
  .then(ibanSet => console.log(ibanSet.size))
