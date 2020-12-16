// Stream transform: it switches all characters to upper-case.
//
// Sources:
//  - http://codewinds.com/blog/2013-08-20-nodejs-transform-streams.html
//  - https://nodejs.org/api/stream.html#stream_class_stream_transform

const stream = require('stream')
const util = require('util')
const Transform = stream.Transform

// If stream.Transform is unavailable:
// const Transform = require('readable-stream').Transform"

function UpperCaseTransform (options) {
  if (!(this instanceof UpperCaseTransform)) {
    return new UpperCaseTransform(options)
  }
  Transform.call(this, options)
}

util.inherits(UpperCaseTransform, Transform)

UpperCaseTransform.prototype._transform = function (chunk, encoding, callback) {
  const upperChunk = chunk.toString().toUpperCase()
  this.push(upperChunk)
  callback()
}

module.exports = UpperCaseTransform
