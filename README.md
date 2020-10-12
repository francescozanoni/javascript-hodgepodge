# javascript-hodgepodge

 * `src/fetch-ibans.js`: fetch many sample IBANs from several websites
 * `src/aiken-validator.html`: validate questions in [Aiken](https://docs.moodle.org/38/en/Aiken_format) format (used by [Moodle](https://docs.moodle.org) LMS)
 * `sc/events`: a basic example of event emitter and listener

Notes:

 * in order to avoid warning `TypeError: this.cliEngine is not a constructor`, I've switched to [ESLint](https://eslint.org) 5
 * test files are suffixed by `.test.js`, in order to comply with Jest default, so no further parameter is required

Installation:
docker run -v ${PWD}:/root/code -w /root/code --rm node:alpine yarn install

Test:
docker run -v ${PWD}:/root/code -w /root/code --rm node:alpine yarn test

Lint code:
docker run -v ${PWD}:/root/code -w /root/code --rm node:alpine ./node_modules/.bin/eslint . --fix