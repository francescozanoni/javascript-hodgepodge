

  test('', async () => {
  
    // Mock HTTP server
    const fileToServe = fs.readFileSync('/path/to/file').toString()
    
    nock('http://hostname')
      .get('/server/path/to/file')
      .reply(200, fileToServe)

    await expect(SchemExtractor.fromUrl(schemaFilePath))
      .rejects
      .toStrictEqual(Error('Invalid input schema: no model schemas found'))
  })
})
