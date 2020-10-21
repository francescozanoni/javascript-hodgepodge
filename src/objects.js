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
  this.setPublicAttribute = function (value) {
    this.publicAttribute = value
  }
  this.getPublicAttribute = function () {
    return this.publicAttribute
  }

  this.toString = function () {
    let output = ''
    output += `Name: ${name}`
    output += ' - '
    output += `Private attr.: ${privateAttribute}`
    output += ' - '
    output += `Public attr.: ${this.publicAttribute}`
    output += ' - '
    output += `Prototype attr.: ${this.protectedAttribute}`
    output += ' - '
    output += `Static attr.: ${MyClass.staticAttribute}`
    return output
  }
}

const o1 = new MyClass('o1')
const o2 = new MyClass('o2')

console.log(o1.toString())
console.log(o2.toString())

console.table([[o1.getPrivateAttribute(), o1.publicAttribute, o1.getPublicAttribute(), o1.protectedAttribute]])
o1.setPrivateAttribute(3)
o1.setPublicAttribute(3)
console.table([[o1.getPrivateAttribute(), o1.publicAttribute, o1.getPublicAttribute(), o1.protectedAttribute]])

console.table([[o2.getPrivateAttribute(), o2.publicAttribute, o2.getPublicAttribute(), o2.protectedAttribute]])
o2.setPrivateAttribute(4)
o2.setPublicAttribute(4)
console.table([[o2.getPrivateAttribute(), o2.publicAttribute, o2.getPublicAttribute(), o2.protectedAttribute]])

console.log(o1.toString())
console.log(o2.toString())

o1.protectedAttribute = 100
o2.protectedAttribute = 101

MyClass.staticAttribute = 102

console.log(o1.toString())
console.log(o2.toString())
