'use strict'

const MyClass = require('./MyClass')

const o1 = new MyClass('o1')
const o2 = new MyClass('o2')

console.log(o1.toString())
console.log(o2.toString())

console.table([[o1.getPrivateAttribute(), o1.publicAttribute]])
o1.setPrivateAttribute(3)
o1.publicAttribute = 3
console.table([[o1.getPrivateAttribute(), o1.publicAttribute]])

console.table([[o2.getPrivateAttribute(), o2.publicAttribute]])
o2.setPrivateAttribute(4)
o2.publicAttribute = 4
console.table([[o2.getPrivateAttribute(), o2.publicAttribute]])

console.log(o1.toString())
console.log(o2.toString())

// https://stackoverflow.com/questions/7662147/how-to-access-object-prototype-in-javascript
Object.getPrototypeOf(o1).prototypeAttribute = 100
Object.getPrototypeOf(o2).prototypeAttribute = 101

MyClass.staticAttribute = 102

console.log(o1.toString())
console.log(o2.toString())

/*
Name: o1 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 99 - Static attr.: 99
Name: o2 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 99 - Static attr.: 99
┌─────────┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2  │
├─────────┼───┼───┼────┤
│    0    │ 1 │ 2 │ 99 │
└─────────┴───┴───┴────┘
┌─────────┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2  │
├─────────┼───┼───┼────┤
│    0    │ 3 │ 3 │ 99 │
└─────────┴───┴───┴────┘
┌─────────┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2  │
├─────────┼───┼───┼────┤
│    0    │ 1 │ 2 │ 99 │
└─────────┴───┴───┴────┘
┌─────────┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2  │
├─────────┼───┼───┼────┤
│    0    │ 4 │ 4 │ 99 │
└─────────┴───┴───┴────┘
Name: o1 - Private attr.: 3 - Public attr.: 3 - Prototype attr.: 99 - Static attr.: 99
Name: o2 - Private attr.: 4 - Public attr.: 4 - Prototype attr.: 99 - Static attr.: 99
Name: o1 - Private attr.: 3 - Public attr.: 3 - Prototype attr.: 101 - Static attr.: 102
Name: o2 - Private attr.: 4 - Public attr.: 4 - Prototype attr.: 101 - Static attr.: 102
 */