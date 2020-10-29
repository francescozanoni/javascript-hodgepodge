'use strict'

const MyClass = require('../src/classes/MyClass')

test('Instantiation', () => {
  const o1 = new MyClass('o1')

  expect(o1.toString())
    .toBe('Name: o1 - Private attr.: 1 - Public attr.: 2 - Static attr.: 99 - Prototype attr.: 55')
})

describe('Private and public attributes', () => {
  test('Set and get', () => {
    const o1 = new MyClass('o1')

    o1.setPrivateAttribute(5)
    o1.publicAttribute = 3

    expect(o1.getPrivateAttribute())
      .toBe(5)
    expect(o1.publicAttribute)
      .toBe(3)
  })

  test('Cannot get private attributes directly', () => {
    const o1 = new MyClass('o1')

    expect(o1.privateAttribute)
      .toBe(undefined)
  })

  test('Cannot set private attributes directly', () => {
    const o1 = new MyClass('o1')

    expect(() => {
      o1.privateAttribute = 5
    })
      .toThrow(TypeError('Cannot add property privateAttribute, object is not extensible'))
  })

  test('Set with sibling objects', () => {
    const o1 = new MyClass('o1')
    const o2 = new MyClass('o2')

    o1.setPrivateAttribute(31)
    o1.publicAttribute = 32

    o2.setPrivateAttribute(41)
    o2.publicAttribute = 42

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 31 - Public attr.: 32 - Static attr.: 99 - Prototype attr.: 55')
    expect(o2.toString())
      .toBe('Name: o2 - Private attr.: 41 - Public attr.: 42 - Static attr.: 99 - Prototype attr.: 55')
  })
})

describe('Prototype attributes', () => {
  test('Set and get with sibling objects', () => {
    const o1 = new MyClass('o1')
    const o2 = new MyClass('o2')

    Object.getPrototypeOf(o1).prototypeAttribute = 100
    Object.getPrototypeOf(o2).prototypeAttribute = 101

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 1 - Public attr.: 2 - Static attr.: 99 - Prototype attr.: 101')
    expect(o2.toString())
      .toBe('Name: o2 - Private attr.: 1 - Public attr.: 2 - Static attr.: 99 - Prototype attr.: 101')
    expect(Object.getPrototypeOf(o1).prototypeAttribute)
      .toBe(Object.getPrototypeOf(o2).prototypeAttribute)
  })
})

describe('Static attributes', () => {
  test('Cannot set and get through object', () => {
    const o1 = new MyClass('o1')

    expect(o1.staticAttribute)
      .toBe(undefined)

    expect(() => {
      o1.staticAttribute = 5
    })
      .toThrow(TypeError('Cannot add property staticAttribute, object is not extensible'))
  })

  test('Set and get through class', () => {
    expect(MyClass.staticAttribute)
      .toBe(99)

    MyClass.staticAttribute = 200

    expect(MyClass.staticAttribute)
      .toBe(200)
  })
})
