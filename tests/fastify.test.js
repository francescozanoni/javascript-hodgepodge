const fastify = require('fastify')

function build (opts = {}) {
  const app = fastify(opts)
  app.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  return app
}

test('Fastify HTTP server', async () => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  expect(response.statusCode)
    .strictEqual(200)
})

// Reference: https://www.fastify.io/docs/latest/Testing/#testing-with-a-running-server
