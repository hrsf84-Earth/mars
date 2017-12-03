const { expect } = require('chai');
const request = require('supertest');
var server = require('../../app.js');

var dmdbKey = process.env.API_KEY || null;

describe ('information from sentiment route with given latitude and longatude', () => {
  var responseData;
  var newdata;
  before ((done) => {
    request(server)
    .get('/movie/10195')
    .then (data => {
      responseData = data.body;
      request(server)
      .get('/movie/10195/37.784180/-122.429560')
      .then (data => {
        newdata = data.body;
        done();
      })
    })
    .catch (err => {
      done(err);
    });
  });

  it('should return sentiment information for a given movie and location', () => {
    expect(newdata.emotion).to.have.a.property('sadness')
    expect(newdata.emotion).to.have.a.property('joy')
    expect(newdata.emotion).to.have.a.property('fear')
    expect(newdata.emotion).to.have.a.property('anger')
  })
  it ('should emotion data be the correct data types', () => {
    expect(newdata.emotion['sadness']).to.be.a('number');
    expect(newdata.emotion['joy']).to.be.a('number');
    expect(newdata.emotion['fear']).to.be.a('number');
    expect(newdata.emotion['anger']).to.be.a('number');
  })
  it ('should have emotion data should be between 0 and 1', () => {
    expect(newdata.emotion['sadness']).to.be.above(0);
    expect(newdata.emotion['sadness']).to.be.below(1);
    expect(newdata.emotion['joy']).to.be.above(0);
    expect(newdata.emotion['joy']).to.be.below(1);
    expect(newdata.emotion['fear']).to.be.above(0);
    expect(newdata.emotion['fear']).to.be.below(1);
    expect(newdata.emotion['anger']).to.be.above(0);
    expect(newdata.emotion['anger']).to.be.below(1);
  })
  it ('should emotion data should be different than the api call without location data', () => {
    expect(newdata.emotion.sadness).to.not.be.equal(responseData.emotion.sadness)
    expect(newdata.emotion.joy).to.not.be.equal(responseData.emotion.joy)
    expect(newdata.emotion.fear).to.not.be.equal(responseData.emotion.fear)
    expect(newdata.emotion.anger).to.not.be.equal(responseData.emotion.anger)
  })

});


