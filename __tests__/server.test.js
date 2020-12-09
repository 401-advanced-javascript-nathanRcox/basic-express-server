'use strict'; 

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .get('/ba-humbug')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });
});

describe('Incorrect method', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .post('/person')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });
});
