// node-fetch is not supported by jest-openapi.
const axios = require('axios')
const nock = require('nock')
const path = require('path')

// This is required to make nock correctly intercept axios requests.
// https://github.com/axios/axios/issues/305
axios.defaults.adapter = require('axios/lib/adapters/http')

const jestOpenAPI = require('jest-openapi')
jestOpenAPI(path.join(__dirname, '/openapi.yaml')) // path.join() is recommended by ESLint

test('Test response against OpenAPI schema', async () => {
  nock('http://hostname')
    .get('/endpoint')
    .reply(200, '{"a":"a","b":1}')

  let response
  try {
    response = await axios.get('http://hostname/endpoint')
  } catch (error) {
    // Error is thrown if HTTP response code is not 200.
    response = error.response
  }

  expect(response.status).toEqual(200)

  expect(response).toSatisfyApiSpec()
})
