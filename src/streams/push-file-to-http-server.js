'use strict'

const http = require('http')
const fs = require('fs')

const server = http.createServer(
  /**
   * @param {IncomingMessage} request
   * @param {ServerResponse} response
   */
  function (request, response) {
    // Request body is treated as a stream.
    const readStream = request

    // Content write to file is managed via a stream.
    // @see https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-write-stream
    const writeStream = fs.createWriteStream('./destination.zip')

    // This statement pipes the body to the file.
    readStream.pipe(writeStream)

    // https://nodejs.org/api/stream.html#stream_event_end
    readStream.on('end', () => {
      console.log('Finished reading request body')
    })

    // https://nodejs.org/api/stream.html#stream_event_finish
    writeStream.on('finish', () => {
      console.log('Finished writing file')
    })
  }
)

server.listen(3000, '0.0.0.0')
