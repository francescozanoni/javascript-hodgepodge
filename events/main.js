'use strict'

// Emitter is requested (and built, since it's the first request).
const emitter = require('./emitter')
console.log('EMITTER REQUESTED BY MAIN SCRIPT')

// Client is requested, which inside requires itself the emitter.
// Inside client file, emitter is not built, only returned the existing instance.
const client = require('./client')
console.log('CLIENT REQUESTED BY MAIN SCRIPT')

// Client is used somehow...
console.log(client)

// On process end, emitter emits an event, which is listened by client's listener.
process.on('exit', function () {
  emitter.emit('event')
})
