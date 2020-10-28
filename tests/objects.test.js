const MyClass = require('../src/objects/MyClass')

describe('objects', () => {
  test('instantiation', () => {
    const o1 = new MyClass('o1')

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 1 - Public attr.: 2 - Prototype attr.: 99 - Static attr.: 99')
  })

  test('set private and public attributes', () => {
    const o1 = new MyClass('o1')

    o1.setPrivateAttribute(3)
    o1.publicAttribute = 3

    expect(o1.toString())
      .toBe('Name: o1 - Private attr.: 3 - Public attr.: 3 - Prototype attr.: 99 - Static attr.: 99')
  })

  test('get private and public attributes', () => {
    const o1 = new MyClass('o1')

    expect(o1.getPrivateAttribute())
      .toBe(1)
    expect(o1.publicAttribute)
      .toBe(2)
  })

  test('set private and public attributes of two objects', () => {
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
})
