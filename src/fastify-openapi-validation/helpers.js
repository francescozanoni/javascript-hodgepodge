/**
 * @param {Object} request Fastify's request object
 * @param {Object} request.raw
 * @param {string} request.raw.method
 * @param {string} request.raw.url
 * @param {Object} request.headers
 * @param {Object} reply Fastify's response object
 * @param {number} reply.statusCode
 * @param {Object} reply.res
 * @param {string} reply.res.statusMessage
 * @param {Function} reply.res.getHeaders
 * @param {Object} payload
 *
 * @return {Object}
 */
const buildAxiosResponse = function (request, reply, payload) {
  return {
    data: payload,
    status: reply.statusCode,
    statusText: reply.res.statusMessage,
    headers: reply.res.getHeaders(),
    request: {
      method: request.raw.method,
      path: request.raw.url,
      headers: request.headers
    }
  }
}

module.exports = {
  buildAxiosResponse
}
