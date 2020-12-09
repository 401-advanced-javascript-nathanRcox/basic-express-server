'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('it the query string is empty', () => {
  it ('should respond with a 500', () => {
    return mockRequest
      .get('/person')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
});

describe('if the name is extant in the query string', () => {
  it ('should respond with a 200', () => {
    return mockRequest
      .get('/person?name=word')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });
});

describe('if the output object is correct', () => {
  it ('should respond with an object', () => {
    return mockRequest
      .get('/person?name=word')
      .then(results => {
        expect(results.body).toEqual( { name: 'word' });
      }).catch(console.error);
  });
});
