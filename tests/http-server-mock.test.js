const fetch = require('node-fetch')
const nock = require('nock')

test('Mock HTTP server', async () => {
  // Mock HTTP server
  nock('http://hostname')
    .get('/path')
    .reply(200, 'text to return')

  // Request to HTTP server
  const response = await fetch('http://hostname/path')
  const body = await response.text()

  expect(response.status).toBe(200)
  expect(body).toBe('text to return')
})
