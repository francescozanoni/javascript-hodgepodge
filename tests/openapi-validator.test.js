// node-fetch is not supported by jest-openapi.
const axios = require('axios')
const nock = require('nock')

// This is required to make nock correctly intercept axios requests.
// https://github.com/axios/axios/issues/305
axios.defaults.adapter = require('axios/lib/adapters/http')

const jestOpenAPI = require('jest-openapi')
jestOpenAPI({
  openapi: '3.0.0',
  info: {
    title: 'Example API',
    version: '1.0.0'
  },
  paths: {
    '/endpoint': {
      get: {
        responses: {
          200: {
            description: 'Response body should be an object with fields a and b',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: [
                    'a',
                    'b'
                  ],
                  properties: {
                    a: {
                      type: 'string'
                    },
                    b: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})

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
