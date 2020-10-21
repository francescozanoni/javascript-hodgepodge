'use strict'

async function f () {
  throw new Error('FROM ASYNC FUNCTION')
}

// #####################################################################################################################

// UnhandledPromiseRejectionWarning: Error: FROM ASYNC FUNCTION

f();

(async function () {
  f()
})();

(async function () {
  await f()
})();

(async () => f())();

(async () => await f())()

try {
  f()
} catch (e) {
  console.log('CAUGHT')
}

(async function () {
  try {
    f()
  } catch (e) {
    console.log('CAUGHT')
  }
})()

// #####################################################################################################################

// CAUGHT

f().catch(() => console.log('CAUGHT'));

(async function () {
  try {
    await f()
  } catch (e) {
    console.log('CAUGHT')
  }
})()
