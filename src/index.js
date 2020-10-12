'use strict'

const urls = require('./config/iban-urls.json')
const fetchIbans = require('./fetch-ibans.js');

(async function () {
  fetchIbans(urls)
    .then(ibans => console.log(ibans))
    .catch(error => console.error(error))
})()
