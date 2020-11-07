const ajv = new (require('ajv'))({ allErrors: true })

const schema = {
  $id: 'http://example.com/schemas/schema.json',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  },
  additionalProperties: false
}

const data = {
  foo: 1,
  bar: 2
}

if (!ajv.validate(schema, data)) {
  console.log(ajv.errors)
}

/*
[
  {
    keyword: 'additionalProperties',
    dataPath: '',
    schemaPath: '#/additionalProperties',
    params: { additionalProperty: 'bar' },
    message: 'should NOT have additional properties'
  },
  {
    keyword: 'type',
    dataPath: '.foo',
    schemaPath: '#/properties/foo/type',
    params: { type: 'string' },
    message: 'should be string'
  }
]
*/
