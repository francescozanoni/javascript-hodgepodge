// Reference:
//  - https://jestjs.io/docs/en/expect#expectassertionsnumber
//  - https://jestjs.io/docs/en/asynchronous

/**
 * This is the tested function, on purpose badly implemented:
 * it throws an error, although async functions should not.
 *
 * @throws {Error}
 */
async function f () {
  throw new Error('ERROR')
}

/*
  (node:1) UnhandledPromiseRejectionWarning: Error: expect(received).resolves.toBe()

  Received promise rejected instead of resolved
  Rejected to value: [Error: ERROR]
  (Use `node --trace-warnings ...` to show where the warning was created)
  (node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 3)
  (node:1) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
  PASS tests/error-within-async.test.js
    ✓ Unhandled error: it passes although actually failing, with warning (7 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        2.435 s
  Ran all test suites matching /tests\/error-within-async.test.js/i.
  */
test('Unhandled error: it passes although actually failing, with warning', () => {
  expect(f())
    .resolves
    .toBe(true)
})

/*
  (node:1) UnhandledPromiseRejectionWarning: Error: expect(received).resolves.toBe(expected) // Object.is equality

  Expected: true
  Received: false
  (Use `node --trace-warnings ...` to show where the warning was created)
  (node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
  (node:1) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
  PASS tests/error-within-async.test.js
    ✓ Handled rejected promise (1): it passes although actually failing, with warning (9 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        2.452 s
  Ran all test suites matching /tests\/error-within-async.test.js/i.
  */
test('Handled rejected promise (1): it passes although actually failing, with warning', () => {
  expect(f().catch(e => false))
    .resolves
    .toBe(true)
})

/*
  PASS tests/error-within-async.test.js
    ✓ Handled rejected promise (2): it passes although actually failing, without warning (3 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        2.456 s
  Ran all test suites matching /tests\/error-within-async.test.js/i.
  */
test('Handled rejected promise (2): it passes although actually failing, without warning', () => {
  f()
    .then(v => expect(v).toBe(1))
    .catch(e => 1)
})

/*
  FAIL tests/error-within-async.test.js
    ✕ Handled rejected promise, enforced assertion check: it fails, as expected (5 ms)

    ● Handled rejected promise, enforced assertion check: it fails, as expected

      expect.assertions(1)

      Expected at least one assertion to be called but received none.

        104 |
        105 | test('Handled rejected promise, enforced assertion check: it fails, as expected', () => {
      > 105 |   expect.assertions(1)
            |          ^
        107 |   f()
        108 |     .then(v => { expect(v).toBe(1); })
        109 |     .catch(e => 1)

        at Object.<anonymous> (tests/async.test.js:76:10)

  Test Suites: 1 failed, 1 total
  Tests:       1 failed, 1 total
  Snapshots:   0 total
  Time:        2.498 s
  Ran all test suites matching /tests\/error-within-async.test.js/i.
  */
test('Handled rejected promise, enforced assertion check: it fails, as expected', () => {
  expect.hasAssertions()
  f()
    .then(v => expect(v).toBe(1))
    .catch(e => 1)
})

/*
  (node:1) UnhandledPromiseRejectionWarning: Error: expect(received).resolves.toBe()

  Received promise rejected instead of resolved
  Rejected to value: [Error: ERROR]
  (Use `node --trace-warnings ...` to show where the warning was created)
  (node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 3)
  (node:1) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
  FAIL tests/error-within-async.test.js
    ✕ Unhandled rejected promise, enforced assertion check: it fails, as expected, with warning (7 ms)

    ● Unhandled rejected promise, enforced assertion check: it fails, as expected, with warning

      expect.assertions(1)

      Expected at least one assertion to be called but received none.

        144 |
        145 | test('Unhandled rejected promise, enforced assertion check: it fails, as expected, with warning, () => {
      > 146 |   expect.assertions(1)
            |          ^
        147 |   expect(f())
        148 |     .resolves
        149 |     .toBe(true)

        at Object.<anonymous> (tests/error-within-async.test.js:113:10)

  Test Suites: 1 failed, 1 total
  Tests:       1 failed, 1 total
  Snapshots:   0 total
  Time:        2.476 s
  Ran all test suites matching /tests\/error-within-async.test.js/i.
  */
test('Unhandled rejected promise, enforced assertion check: it fails, as expected, with warning', () => {
  expect.hasAssertions()
  expect(f())
    .resolves
    .toBe(true)
})
