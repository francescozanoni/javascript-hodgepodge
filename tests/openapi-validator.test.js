// I had to use Axios, since node-fetch seems not to work.
const axios = require('axios')
const httpAdapter = require('axios/lib/adapters/http')
const nock = require('nock')
const regeneratorRuntime = require('regenerator-runtime/runtime')

// https://github.com/axios/axios/issues/305
axios.defaults.adapter = httpAdapter;

const jestOpenAPI = require('jest-openapi')
jestOpenAPI({
  'openapi': '3.0.0',
  'info': {
    'title': 'Example API',
    'version': '1.0.0'
  },
  'paths': {
    '/endpoint': {
      'get': {
        'responses': {
          '200': {
            'description': 'Response body should be an object with fields a and b',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'required': [
                    'a',
                    'b'
                  ],
                  'properties': {
                    'a': {
                      'type': 'string'
                    },
                    'b': {
                      'type': 'integer'
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

  const res = await axios.get('http://hostname/endpoint');

  expect(res.status).toEqual(200);

  expect(res).toSatisfyApiSpec();
})

// https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test/57439821#57439821