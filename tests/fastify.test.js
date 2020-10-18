const fastify = require('fastify')

function buildApp (opts = {}) {
  const app = fastify(opts)
  app.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  return app
}

test('Fastify HTTP server', async () => {
  const app = buildApp()
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

// Reference: https://www.fastify.io/docs/latest/Testing
