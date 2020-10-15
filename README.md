# My JavaScript hodgepodge


Several basic examples and experiments with JavaScript.


### Examples

 * `src/fetch-ibans`: fetch many sample IBANs from several websites, in parallel with [node-fetch](https://www.npmjs.com/package/node-fetch) package and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * `src/events`: NodeJS [event](https://nodejs.org/api/events.html) emitter and listener
 * `tests/node-fetch.test.js`: HTTP request/response test with [node-fetch](https://www.npmjs.com/package/node-fetch) package
 * `tests/http-server-mock.test.js`: test client functionalities by mocking an HTTP server with [nock](https://github.com/nock/nock) package
 * `.eslintrc.json`: configuration for [ESLint](https://eslint.org) package


### Experiments

 * `src/aiken-validator`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)


#### Notes

 * in order to avoid warning `TypeError: this.cliEngine is not a constructor` within IDE, I've switched to [ESLint](https://eslint.org) 5
 * test files are suffixed by `.test.js`, in order to comply with [Jest](https://jestjs.io) default, so no further parameter is required


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