'use strict'

const MyClass = require('../src/objects/MyClass')

describe('Objects', () => {
  test('Instantiation', () => {
    const o1 = new MyClass('o1')

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 99 - Static attr.: 99')
  })

  test('Set private and public attributes', () => {
    const o1 = new MyClass('o1')

    o1.setPrivateAttribute(3)
    o1.publicAttribute = 3

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 3 - Public attr.: 3 - Prototype attr.: 99 - Static attr.: 99')
  })

  test('Get private and public attributes', () => {
    const o1 = new MyClass('o1')

    expect(o1.getPrivateAttribute())
      .toBe(1)
    expect(o1.publicAttribute)
      .toBe(2)

    expect(o1.privateAttribute)
      .toBe(undefined)
  })

  test('Set private and public attributes of sibling objects', () => {
    const o1 = new MyClass('o1')
    const o2 = new MyClass('o2')

    o1.setPrivateAttribute(31)
    o1.publicAttribute = 32

    o2.setPrivateAttribute(41)
    o2.publicAttribute = 42

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 31 - Public attr.: 32 - Prototype attr.: 99 - Static attr.: 99')
    expect(o2.toString())
      .toBe('Name: o2 - Private attr.: 41 - Public attr.: 42 - Prototype attr.: 99 - Static attr.: 99')
  })

  test('Set and get prototype attribute of sibling objects', () => {
    const o1 = new MyClass('o1')
    const o2 = new MyClass('o2')

    Object.getPrototypeOf(o1).prototypeAttribute = 100
    Object.getPrototypeOf(o2).prototypeAttribute = 101

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 101 - Static attr.: 99')
    expect(o2.toString())
      .toBe('Name: o2 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 101 - Static attr.: 99')
    expect(Object.getPrototypeOf(o1).prototypeAttribute)
      .toBe(Object.getPrototypeOf(o2).prototypeAttribute)
  })

  test('Cannot set and get static attribute through object', () => {
    const o1 = new MyClass('o1')

    expect(o1.staticAttribute)
      .toBe(undefined)

    expect(() => { o1.staticAttribute = 5 })
      .toThrow(TypeError('Cannot add property staticAttribute, object is not extensible'))
  })

  test('Set and get static attribute through class', () => {
    expect(MyClass.staticAttribute)
      .toBe(99)

    MyClass.staticAttribute = 200

    expect(MyClass.staticAttribute)
      .toBe(200)
  })
})
