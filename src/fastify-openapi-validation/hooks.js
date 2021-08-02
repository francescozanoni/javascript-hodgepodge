const openapiSchemaPath = '/path/to/openapi.yaml'
const Validator = require('./Validator')
const helpers = require('./helpers')

/**
 * @param request
 * @param reply
 * @param payload
 * @param done
 */
function preSerialization (request, reply, payload, done) {
  // Build a fake Axios response from Fastify Request and Reply objects.
  const axiosResponse = helpers.buildAxiosResponse(request, reply, payload)

  const validator = new Validator(openapiSchemaPath)
  console.log(validator.validateResponse(axiosResponse))

  done(err, payload)
}

/**
 * @param request
 * @param reply
 * @param payload
 * @param done
 */
function onSend (request, reply, payload, done) {
  // Build a fake Axios response from Fastify Request and Reply objects.
  const axiosResponse = helpers.buildAxiosResponse(request, reply, JSON.parse(payload))

  const validator = new Validator(openapiSchemaPath)
  console.log(validator.validateResponse(axiosResponse))

  done(err, payload)
}

module.exports = {
  preSerialization,
  onSend
}
