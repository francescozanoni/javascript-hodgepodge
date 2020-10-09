'use strict'

// Here emitter is not built, only returned the existing instance,
// since it has already been build by main.js.
const emitter = require("./emitter");
console.log("EMITTER REQUESTED BY CLIENT");

// Client adds a listener to emitter.
emitter.addListener("event", function () {
  console.log("CLIENT LISTENER TRIGGERED");
});
console.log("CLIENT LISTENER ADDED");

module.exports = { /* client */ };