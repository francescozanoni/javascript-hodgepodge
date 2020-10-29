const _ = require('lodash')

const o = {
  a: 1,
  b: undefined,
  // c is not provided on purpose
  d: null
}

console.log()

console.log(o)

console.log()

// o.hasOwnProperty('a') should not be used, since it raises below ESLint error:
// error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins

console.log('o has a: ' + Object.prototype.hasOwnProperty.call(o, 'a'))
console.log('o has b: ' + Object.prototype.hasOwnProperty.call(o, 'b'))
console.log('o has c: ' + Object.prototype.hasOwnProperty.call(o, 'c'))
console.log('o has d: ' + Object.prototype.hasOwnProperty.call(o, 'd'))

console.log()

console.log('o.a is defined: ' + ((typeof o.a) !== 'undefined'))
console.log('o.b is defined: ' + ((typeof o.b) !== 'undefined'))
console.log('o.c is defined: ' + ((typeof o.c) !== 'undefined'))
console.log('o.d is defined: ' + ((typeof o.d) !== 'undefined'))

console.log()

console.log('o _.has a: ' + _.has(o, 'a'))
console.log('o _.has b: ' + _.has(o, 'b'))
console.log('o _.has c: ' + _.has(o, 'c'))
console.log('o _.has d: ' + _.has(o, 'd'))

console.log()
