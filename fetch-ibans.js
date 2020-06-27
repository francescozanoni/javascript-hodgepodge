const fetch = require('node-fetch')

var urls = [
  'https://www.citadele.lt/en/support/online-banking/examples/',
  'https://it.iban.com/struttura',
  'https://transferwise.com/gb/iban/example?all=true#structure_and_examples',
  'https://bank.codes/iban/examples/',
  'http://iban.co.uk/examples.html',
  'https://www.danskebank.ie/en-ie/Personal/Day-to-day/Payments/helpfulInformation/Pages/What-is-IBAN-SWIFT-BIC.aspx',
  'https://www.dnb.no/en/business/transaction-banking/international-payments/example-iban.html',
  'https://www.hl.co.uk/investment-services/currency-service/ways-to-convert-currency/bank-transfer-information/iban-example',
  'https://ssl.ibanrechner.de/sample_accounts.html'
]

Promise.all(urls.map(url => fetch(url)))
// Extract raw IBANs from HTML pages.
  .then(responses => Promise.all(responses.map(response => response.text()))
    .then(bodies => bodies.map(body => body.match(/[A-Z]{2} ?[0-9]{2} ?[A-Z0-9 ]{4,}/g)))
  )
  // Clean raw IBANs.
  .then(ibanArrays => ibanArrays.map(ibanArray => ibanArray.map(iban => iban.replace(/\W/g, ''))))
  // Merge all IBAN arrays.
  .then(ibanArrays => new Set([].concat(...ibanArrays)))
  .then(ibanSet => console.log(ibanSet.size))
