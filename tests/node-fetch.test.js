const fetch = require('node-fetch')

describe('node-fetch', () => {
  test('await', async () => {
    const response = await fetch('https://github.com/')
    const body = await response.text()

    expect(response.status).toBe(200)

    expect(body.length).toBeGreaterThan(0)
  })

  test('return expect resolves', () => {
    expect.hasAssertions()
    return expect(fetch('https://github.com/'))
      .resolves
      .toBeDefined()
  })

  test('await expect', async () => {
    expect.hasAssertions()
    await expect(fetch('https://github.com/'))
      .resolves
      .toBeDefined()
  })

  test('await fetch', async () => {
    expect.hasAssertions()
    const response = await fetch('https://github.com/')
    expect(response)
      .toBeDefined()
  })
})

// Source: https://jestjs.io/docs/en/tutorial-async