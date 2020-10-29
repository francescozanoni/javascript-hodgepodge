'use strict'

const MyPrototype = function () {
  // This attribute is inherited and its value is shared among instances.
  this.prototypeAttribute = 55
}

const MyClass = function (inputName) {
  // Private constant
  const name = inputName

  let privateAttribute = 1
  this.publicAttribute = 2

  // This attribute is not directly reachable through instances.
  MyClass.staticAttribute = 99

  this.getPrivateAttribute = function () {
    return privateAttribute
  }
  this.setPrivateAttribute = function (value) {
    privateAttribute = value
  }

  this.toString = function () {
    let output = ''
    output += `Name: ${name}`
    output += ' - '
    output += `Private attr.: ${privateAttribute}`
    output += ' - '
    output += `Public attr.: ${this.publicAttribute}`
    output += ' - '
    output += `Static attr.: ${MyClass.staticAttribute}`
    output += ' - '
    output += `Prototype attr.: ${Object.getPrototypeOf(this).prototypeAttribute}`
    return output
  }

  Object.seal(this)
}

MyClass.prototype = new MyPrototype()

module.exports = MyClass
