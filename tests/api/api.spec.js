const { test, expect } = require('@playwright/test');

test('GET all posts', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);

  console.log('Total posts:', body.length);
});

test('GET single post', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');
});
test('Create new post', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Playwright API',
      body: 'Learning API testing',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright API');
});
test('Login API Test', async ({ request }) => {

  const response = await request.post('https://reqres.in/api/login', {
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }
  });

  console.log('Status:', response.status());
  console.log('Raw body:', await response.text());

});

