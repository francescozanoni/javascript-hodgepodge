'use strict'

const http = require('http')
const $RefParser = require('@apidevtools/json-schema-ref-parser')
const OpenApiValidator = require('openapi-validator')

const openApiSchemaPath = process.cwd() + '/src/openapi-path-detector/openapi.yaml'

/**
 * Usage example with Node JS basic web server.
 *
 * Run with node example.js and then test below URLs:
 *  - http://localhost:3000/
 *  - http://localhost:3000/#hash
 *  - http://localhost:3000/?b=c
 *  - http://localhost:3000/found
 */

const server = http.createServer(async (request, response) => {
  let output

  try {
    // Load OpenAPI schema as plain object and resolve all internal references.
    let openApiSpecification = await $RefParser.dereference(openApiSchemaPath)
    // Load OpenAPI schema engine.
    openApiSpecification = OpenApiValidator.openApiSpecFactory.makeApiSpec(openApiSpecification)
    // Transform Node JS request object to an object processable by OpenAPI schema engine.
    const openApiPath = openApiSpecification.findOpenApiPathMatchingRequest({
      path: request.url,
      method: request.method
    })
    // Get OpenAPI path from request.
    output = openApiSpecification.getPathItem(openApiPath)[request.method.toLowerCase()]
    response.statusCode = 200
  } catch (error) {
    output = [error.message]
    response.statusCode = 400
  }

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(output, null, 2))
})

server.listen(3000, '127.0.0.1', () => {
})
