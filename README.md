# My JavaScript hodgepodge


Several basic examples and experiments with JavaScript.


### Examples

 * `src/fetch-ibans`: fetch many sample IBANs from several websites, in parallel with [node-fetch](https://www.npmjs.com/package/node-fetch) package and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * `src/headless-browser`: use a headless browser (e.g. [Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)) to surf the web
 * `src/node-events`: NodeJS custom [event](https://nodejs.org/api/events.html) management
 * `src/openapi-path-detector`: find [OpenAPI](https://swagger.io/specification) path definition of a web request
 * `src/react`: [React JS](https://reactjs.org) usage with event-driven component communication
 * `src/streams`: examples with Node's [streams](https://nodejs.org/api/stream.html)
 * `src/browser-events.html`: web browser custom [event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) management
 * `src/error-within-async.js`: examples of error raised within async function
 * `src/property-existence-check.js`: how to check for existence of an object property
 * `src/read-text-file-lines.js`: read specific lines from text file with OS tools
 * `src/tree.html`: tree rendering example with [Treant.js](http://fperucic.github.io/treant-js) package
 * `src/utils.html`: few utility functions
 * `src/validation-with-json-schema.js`: data validation via [JSON schema](https://json-schema.org) with [Ajv](https://ajv.js.org) package
 * `.eslintrc.json`: configuration for [ESLint](https://eslint.org) package


### Test examples

 * `tests/error-within-async.test.js`: ensure unexpected errors raised within asynchronous code do not jeopardize tests performed by [Jest](https://jestjs.io) framework
 * `tests/fastify.test.js`: test [Fastify](https://www.fastify.io)-based web application
 * `tests/fs-mock.test.js`: mock external module functions with [Jest](https://jestjs.io) framework
 * `tests/http-server-mock.test.js`: test client functionalities by mocking an HTTP server with [nock](https://github.com/nock/nock) package
 * `tests/node-fetch.test.js`: HTTP request/response test with [node-fetch](https://www.npmjs.com/package/node-fetch) package
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

 * test files are suffixed with `.test.js`, in order to comply with [Jest](https://jestjs.io) default: this makes no further configuration required
 * in order to avoid warning `Unresolved function/method/variable` within IDE, `@types/jest` package has been added, as suggested [here](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324-Get-rid-of-Unresolved-function-method-variable-warning-in-Jest-test-files)
 * (this could seem advertising, I know) a **LOT** of examples can be found on book [JavaScript: The Definitive Guide (7th ed.)](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016), by [David Flanagan](https://davidflanagan.com)
