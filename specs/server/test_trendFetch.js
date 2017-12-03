const { movieTrend, convertToRelative } = require('../../utils/trendFetch')
const { expect } = require('chai')

describe ('Tests for trendFetch', () =>{
  var trendData;
  var trendDataConverted;
  before (done => {
    movieTrend('Thor', '2011-04-21')
    .then(response => {
      trendData = response;
      trendDataConverted = JSON.parse(trendData).default;
      done();
    })
    .catch(err => {
      done(err);
    })

  })
  // data {"default":
  // {"timelineData":
  // [
  //   {"time":"1287878400","formattedTime":"Oct 24 - Oct 30 2010","formattedAxisTime":"Oct 24, 2010","value":[1,76],"formattedValue":["1","76"]},
  //   {"time":"1288483200","formattedTime":"Oct 31 - Nov 6 2010","formattedAxisTime":"Oct 31, 2010","value":[1,76],"formattedValue":["1","76"]},
  //   {"time":"1289088000","formattedTime":"Nov 7 - Nov 13 2010","formattedAxisTime":"Nov 7, 2010","value":[1,75],"formattedValue":["1","75"]},
  //   {"time":"1289692800","formattedTime":"Nov 14 - Nov 20 2010","formattedAxisTime":"Nov 14, 2010","value":[1,77],"formattedValue":["1","77"]},
  //   {"time":"1290297600","formattedTime":"Nov 21 - Nov 27 2010","formattedAxisTime":"Nov 21, 2010","value":[1,81],"formattedValue":["1","81"]},
  //   {"time":"1290902400","formattedTime":"Nov 28 - Dec 4 2010","formattedAxisTime":"Nov 28, 2010","value":[1,75],"formattedValue":["1","75"]},
  //   {"time":"1291507200","formattedTime":"Dec 5 - Dec 11 2010","formattedAxisTime":"Dec 5, 2010","value":[2,75],"formattedValue":["2","75"]},
  //   {"time":"1292112000","formattedTime":"Dec 12 - Dec 18 2010","formattedAxisTime":"Dec 12, 2010","value":[2,77],"formattedValue":["2","77"]},
  //   {"time":"1292716800","formattedTime":"Dec 19 - Dec 25 2010","formattedAxisTime":"Dec 19, 2010","value":[2,88],"formattedValue":["2","88"]},
  //   {"time":"1293321600","formattedTime":"Dec 26 2010 - Jan 1 2011","formattedAxisTime":"Dec 26, 2010","value":[2,100],"formattedValue":["2","100"]},
  //   {"time":"1293926400","formattedTime":"Jan 2 -.... etc

  //   ... , "averages":[4,77]}}

  it ('expect data from google trends', () =>{
    expect(trendData).to.exist;
    expect(trendData).to.be.a('string');
  })

  it ('expect data to contain default and trend data inside default ', () =>{
    // var trendDataConverted = JSON.parse(trendData).default;
  })
  describe ('timeline', () =>{
    it ('Should contain a timeline', () =>{
      expect(trendDataConverted).to.exist;
    })

    it ('should contain timeline data, and averages', () =>{
      expect(trendDataConverted.averages).to.exist;
      expect(trendDataConverted.timelineData).to.exist;
    })
    it ('should contain information with the proper titles', () =>{
      expect(trendDataConverted.timelineData).to.be.a('array');
      expect(trendDataConverted.timelineData[0]).to.be.a('object');
      expect(trendDataConverted.timelineData[0]).to.have.a.property('time')
      expect(trendDataConverted.timelineData[0]).to.have.a.property('formattedTime')
      expect(trendDataConverted.timelineData[0]).to.have.a.property('formattedAxisTime')
      expect(trendDataConverted.timelineData[0]).to.have.a.property('value')
      expect(trendDataConverted.timelineData[0]).to.have.a.property('formattedValue')
    })
    it ('should averages be an array and have numbers', () =>{
      expect(trendDataConverted.averages).to.be.a('array');
      expect(trendDataConverted.averages[0]).to.be.a('number');

    })

    // console.log('data', Object.keys(trendDataConverted))
  })
})