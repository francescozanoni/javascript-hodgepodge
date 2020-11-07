# My JavaScript hodgepodge


Several basic examples and experiments with JavaScript.


### Examples

 * `src/fetch-ibans`: fetch many sample IBANs from several websites, in parallel with [node-fetch](https://www.npmjs.com/package/node-fetch) package and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * `src/events`: NodeJS [event](https://nodejs.org/api/events.html) emitter and listener
 * `src/property-existence-check.js`: how to check for an object property existence
 * `src/error-within-async.js`: examples of error raised within async function
 * `src/validation-with-json-schema.js`: data validation via [JSON schema](https://json-schema.org) with [Ajv](https://ajv.js.org) package
 * `tests/node-fetch.test.js`: HTTP request/response test with [node-fetch](https://www.npmjs.com/package/node-fetch) package
 * `tests/http-server-mock.test.js`: test client functionalities by mocking an HTTP server with [nock](https://github.com/nock/nock) package
 * `tests/error-within-async.test.js`: how to ensure unexpected errors raised within asynchronous code do not jeopardize tests performed by [Jest](https://jestjs.io) test framework
 * `tests/fastify.test.js`: test [Fastify](https://www.fastify.io)-based web application
 * `tests/fs-mock.test.js`: how to mock an external module function with [Jest](https://jestjs.io) test framework
 * `.eslintrc.json`: configuration for [ESLint](https://eslint.org) package


### Experiments

 * `src/aiken-validator`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)


#### Notes

 * in order to avoid warning `TypeError: this.cliEngine is not a constructor` within IDE, I've switched to [ESLint](https://eslint.org) 5
 * test files are suffixed by `.test.js`, in order to comply with [Jest](https://jestjs.io) default, so no further parameter is required
 * package `@types/jest` has been installed in order to remove IDE warnings
 * (this could seem advertising, I know) a **LOT** of examples can be found on book [JavaScript: The Definitive Guide, 7th Edition](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016), by [David Flanagan](https://davidflanagan.com)


----


### Installation

    docker run -v ${PWD}:/code \
               -w /code \
               --rm \
               node:alpine \
               yarn install


### Test

    docker run -v ${PWD}:/code \
               -w /code \
               --rm \
               node:alpine \
               yarn test


### Code linting

    docker run -v ${PWD}:/code \
               -w /code \
               --rm \
               node:alpine \
               yarn lint
