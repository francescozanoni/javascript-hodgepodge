const fastify = require('fastify')
const fetch = require('node-fetch')

function buildApp (opts = {}) {
  const app = fastify(opts)
  app.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  return app
}

let app

beforeEach(() => app = buildApp())
afterEach(() => app.close())

describe('Testing Fastify', () => {
test('With HTTP injection', async () => {
  const request = {
    method: 'GET',
    url: '/'
  }

  const response = await app.inject(request)

  expect(response.statusCode)
    .toStrictEqual(200)
  expect(response.body)
    .toStrictEqual('{"hello":"world"}')
})

test('With running server', async () => {

  app.listen(0, (error) => {

    const response = await fetch('http://localhost')
    const body = await response.text()

    expect(response.status)
    .toStrictEqual(200)
  expect(body)
    .toStrictEqual('{"hello":"world"}')
})
})

// https://jestjs.io/docs/en/setup-teardown
// Reference: https://www.fastify.io/docs/latest/Testing
