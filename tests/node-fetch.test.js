const fetch = require('node-fetch');

test('node-fetch to GitHub', async () => {

     const response = await fetch('https://github.com/');
	const body = await response.text();
	
	  expect(response.status).toBe(200);
	  
	  expect(body.length).toBeGreaterThan(0);
});
