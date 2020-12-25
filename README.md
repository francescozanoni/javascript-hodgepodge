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
 * `src/tree.html`: tree rendering example with [Treant.js](http://fperucic.github.io/treant-js) package
 * `src/streams`: examples with Node's [streams](https://nodejs.org/api/stream.html)
 * `.eslintrc.json`: configuration for [ESLint](https://eslint.org) package


### Test examples

 * `tests/node-fetch.test.js`: HTTP request/response test with [node-fetch](https://www.npmjs.com/package/node-fetch) package
 * `tests/http-server-mock.test.js`: test client functionalities by mocking an HTTP server with [nock](https://github.com/nock/nock) package
 * `tests/error-within-async.test.js`: ensure unexpected errors raised within asynchronous code do not jeopardize tests performed by [Jest](https://jestjs.io) framework
 * `tests/fastify.test.js`: test [Fastify](https://www.fastify.io)-based web application
 * `tests/fs-mock.test.js`: mock external module functions with [Jest](https://jestjs.io) framework
 * `tests/openapi-validator.test.js`: validate API response against [OpenAPI](https://swagger.io/specification) schema with [jest-openapi](https://github.com/openapi-library/OpenAPIValidators/tree/master/packages/jest-openapi) package


### Experiments

 * `src/aiken-validator`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)


----


### Installation

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn install


### Test

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn test


### Code linting

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn lint


----


### Notes

 * test files are suffixed by `.test.js`, in order to comply with [Jest](https://jestjs.io) default, so no further parameter is required
 * in order to avoid warning `Unresolved function/method/variable` within IDE, I've added `@types/jest` package, as suggested [here](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324-Get-rid-of-Unresolved-function-method-variable-warning-in-Jest-test-files)
 * (this could seem advertising, I know) a **LOT** of examples can be found on book [JavaScript: The Definitive Guide (7th ed.)](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016), by [David Flanagan](https://davidflanagan.com)
