# My JavaScript hodgepodge


Several basic examples and experiments with JavaScript.


### Examples

 * `src/fetch-ibans`: fetch many sample IBANs from several websites, in parallel with [node-fetch](https://www.npmjs.com/package/node-fetch) package and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * `src/node-events`: NodeJS custom [event](https://nodejs.org/api/events.html) management
 * `src/browser-events.html`: web browser custom [event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) management
 * `src/property-existence-check.js`: how to check for an object property existence
 * `src/error-within-async.js`: examples of error raised within async function
 * `src/validation-with-json-schema.js`: data validation via [JSON schema](https://json-schema.org) with [Ajv](https://ajv.js.org) package
 * `src/react.html`: [React JS](https://reactjs.org) with event-driven component communication
 * `src/react`: another basic example with [React JS](https://reactjs.org)
 * `.eslintrc.json`: configuration for [ESLint](https://eslint.org) package
 * `babel.config.json`: configuration file for [Babel](https://babeljs.io), customized for [React JS](https://reactjs.org) and very old browsers on Apple [iOS](https://www.apple.com/ios) 9.3


### Test examples

 * `tests/node-fetch.test.js`: HTTP request/response test with [node-fetch](https://www.npmjs.com/package/node-fetch) package
 * `tests/http-server-mock.test.js`: test client functionalities by mocking an HTTP server with [nock](https://github.com/nock/nock) package
 * `tests/error-within-async.test.js`: ensure unexpected errors raised within asynchronous code do not jeopardize tests performed by [Jest](https://jestjs.io) framework
 * `tests/fastify.test.js`: test [Fastify](https://www.fastify.io)-based web application
 * `tests/fs-mock.test.js`: mock external module functions with [Jest](https://jestjs.io) framework


### Experiments

 * `src/aiken-validator`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)


----


### Installation

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn install


### Test

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn test


### Code linting

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn lint


### Code transpilation

    docker run -v ${PWD}:/root -w /root --rm node:alpine npx babel /root/src/react/script.js -o /root/src/react/script.transpiled.js



----


### Notes

 * in order to avoid warning `TypeError: this.cliEngine is not a constructor` within IDE, I've switched to [ESLint](https://eslint.org) 5, as suggested [here](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360004195120-TypeError-this-cliEngine-is-not-a-constructor)
 * test files are suffixed by `.test.js`, in order to comply with [Jest](https://jestjs.io) default, so no further parameter is required
 * in order to avoid warning `Unresolved function/method/variable` within IDE, I've added `@types/jest` package, as suggested [here](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324-Get-rid-of-Unresolved-function-method-variable-warning-in-Jest-test-files)
 * (this could seem advertising, I know) a **LOT** of examples can be found on book [JavaScript: The Definitive Guide (7th ed.)](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016), by [David Flanagan](https://davidflanagan.com)
