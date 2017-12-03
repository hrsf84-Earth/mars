const { expect } = require('chai');
const request = require('supertest');
var server = require('../../app.js');

describe('loading routes', () => {
  // let server;
  beforeEach(() => {
    server = require('../../app.js');
  });
  afterEach(function(){
    server.close();
  });
  it('responds to get', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
  // the below test requires a valid API key!!!!!
  it('responds to search by tmdbId', (done) => {
    request(server)
      .get('/movie/315635')
      .expect(200, done);
  });
  it('responds to searchmovie', (done) => {
    request(server)
      .get('/search/:movie')
      .expect(200, done);
  });
  it('should throw an error for a bad request', (done) => {
    request(server)
      .get('/movie/:tmdbId')
      .expect(400, done);
  });
});
