const fastify = require('fastify')
const fetch = require('node-fetch')

let app

beforeEach(() => {
  app = fastify()
  app.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
})
afterEach(async () => {
  await app.close()
  app = undefined
})

describe('Testing Fastify', () => {
  test('With HTTP injection', async () => {
    expect.hasAssertions()

    const response = await app.inject({
      method: 'GET',
      url: '/'
    })

    expect(response.statusCode)
      .toStrictEqual(200)
    expect(response.body)
      .toStrictEqual('{"hello":"world"}')
  })

  // "done" parameter is required, because test is performed inside a callback function
  test('With running server', (done) => {
    expect.hasAssertions()
    app.listen(3000, async (error) => {
      if (error) {
        return
      }

      const response = await fetch('http://localhost:3000')
      const body = await response.text()

      expect(response.status)
        .toStrictEqual(200)
      expect(body)
        .toStrictEqual('{"hello":"world"}')
      done()
    })
  })
})

/*
References:
 - https://www.fastify.io/docs/latest/Testing
 - https://jestjs.io/docs/en/setup-teardown
 - https://stackoverflow.com/questions/60399676/fastify-jest-running-processes-after-calling-close-on-fastify-instance
 - https://jestjs.io/docs/en/asynchronous
*/
