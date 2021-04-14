const fetch = require('node-fetch')
const axios = require('axios')
const nock = require('nock')

// This is required to make nock correctly intercept axios requests.
// https://github.com/axios/axios/issues/305
axios.defaults.adapter = require('axios/lib/adapters/http')

// Mock HTTP server.
nock('http://hostname')
  .persist() // --> this is required when the endpoint is invoked more than once.
  .get('/path')
  .reply(200, 'text to return')

describe('Mock HTTP server', () => {
  test('node-fetch client', async () => {
    // Request to HTTP server
    const response = await fetch('http://hostname/path')

    const body = await response.text()

    expect(response.status).toBe(200)
    expect(body).toBe('text to return')
  })

  test('axios client', async () => {
    // Request to HTTP server
    const response = await axios.get('http://hostname/path')

    expect(response.status).toBe(200)
    expect(response.data).toBe('text to return')
  })
})
