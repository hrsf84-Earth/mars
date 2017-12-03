const { expect } = require('chai');
const request = require('supertest');
var server = require('../../app.js');

var dmdbKey = process.env.API_KEY || null;

describe('information from movie route', function () {
  var retrievedData;
  var bodyData;
  before ((done)=> {
    request(server)
    .get('/movie/10195')
    .expect(200)
    .then (data => {
      retrievedData = data;
      bodyData = retrievedData.body;
      done();
    })
    .catch (err => {
      done(err);
    });
  })

  it('should return information from DMBD api from the movie Thor', () => {
    expect(bodyData).to.not.be.empty;
  })

  it ('should have a title of Thor', () => {
    expect(bodyData.title).to.include ('Thor')
    expect(bodyData.title).to.be.a('string');
  })

  it ('should return information with the request', () =>{
    expect(bodyData).to.have.a.property('_id')
    expect(bodyData).to.have.a.property('budget');
    expect(bodyData).to.have.a.property('images');
    expect(bodyData).to.have.a.property('revenue');
    expect(bodyData).to.have.a.property('releaseDate');
    expect(bodyData).to.have.a.property('revenue');
    expect(bodyData).to.have.a.property('title');
    expect(bodyData).to.have.a.property('tmdbId');
  })

  it ('should have emotion data in the correct format', () =>{
    expect(bodyData).to.have.a.property('emotion');
    expect(bodyData).to.be.a('object');
    expect(bodyData.emotion).to.have.a.property('sadness');
    expect(bodyData.emotion).to.have.a.property('joy');
    expect(bodyData.emotion).to.have.a.property('fear');
    expect(bodyData.emotion).to.have.a.property('anger');
  })
  it ('should have tendData in the correct format', () =>{
    expect(bodyData).to.have.a.property('trendData');
    expect(bodyData.trendData[0]).to.have.a.property('formattedAxisTimeRelative');
    expect(bodyData.trendData[0].formattedAxisTimeRelative).to.be.an('number');
    expect(bodyData.trendData[0]).to.have.a.property('formattedAxisTime');
    expect(bodyData.trendData[0].formattedAxisTime).to.be.an('string');
    expect(bodyData.trendData[0]).to.have.a.property('value');
    expect(bodyData.trendData[0].value).to.be.an('number');
  })
})

