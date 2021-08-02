// https://github.com/openapi-library/OpenAPIValidators

const {
  openApiSpecFactory,
  responseFactory
} = require('openapi-validator')

const ValidatorPrototype = {

  openApiSpec: undefined,

  /**
   * @param {Object} response Axios/SuperAgent/RequestPromise response object
   *
   * @return {boolean|{code: *, messages: string[]}}
   */
  validateResponse: function (response) {
    const actualResponse = responseFactory.makeResponse(response)
    let validationError = this.openApiSpec.validateResponse(actualResponse)
    if (validationError) {
      validationError = {
        code: validationError.code,
        messages: validationError.toString().split(', ')
      }
    }
    return validationError
  }

}

/**
 * @param {string|Object} filepathOrObject
 *
 * @constructor
 */
const Validator = function (filepathOrObject) {
  this.openApiSpec = openApiSpecFactory.makeApiSpec(filepathOrObject)

  Object.freeze(this)
}

Validator.prototype = ValidatorPrototype

module.exports = Validator
