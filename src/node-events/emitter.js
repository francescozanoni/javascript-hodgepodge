'use strict'

const events = require('events')

const emitter = new events.EventEmitter()

console.log('EMITTER INSTANTIATED')

module.exports = emitter
