'use strict'

const MyClass = function (inputName) {
  // Private constant
  const name = inputName

  let privateAttribute = 1
  this.publicAttribute = 2

  // This attribute is inherited, but its value is not shared among instances.
  MyClass.prototype.protectedAttribute = 99

  // This attribute is inherited and its value is shared among instances.
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
    output += `Prototype attr.: ${MyClass.prototype.protectedAttribute}`
    output += ' - '
    output += `Static attr.: ${MyClass.staticAttribute}`
    return output
  }

  Object.seal(this)
}

module.exports = MyClass
