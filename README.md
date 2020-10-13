# javascript-hodgepodge

 * `src/fetch-ibans`: fetch many sample IBANs from several websites
 * `src/aiken-validator`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)
 * `src/events`: event emitter and listener
 * `tests/node-fetch.test.js`: HTTP request/response test

## Notes

 * in order to avoid warning `TypeError: this.cliEngine is not a constructor`, I've switched to [ESLint](https://eslint.org) 5
 * test files are suffixed by `.test.js`, in order to comply with Jest default, so no further parameter is required

----

## Installation

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn install

## Tests

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn test

## Code linting

    docker run -v ${PWD}:/code -w /code --rm node:alpine yarn lint