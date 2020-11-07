const fs = require('fs')
jest.mock('fs')

test('Mock fs.readFileSync()', async () => {
  expect.assertions(2)

  // Mock only return value.
  fs.readFileSync.mockReturnValue('a')
  expect(fs.readFileSync('anything')).toBe('a')

  // Mock function implementation.
  fs.readFileSync.mockImplementation(() => 'b')
  expect(fs.readFileSync('anything else')).toBe('b')
})

// Source: https://jestjs.io/docs/en/mock-functions
