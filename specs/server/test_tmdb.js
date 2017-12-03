const { expect } = require('chai');
// const request = require('supertest');
var { searchMoviesByName, fetchMovieById, fetchImageById } = require('../../utils/tmdb.js');
var api_key = process.env.API_KEY || null;
var id = 10195;

describe ('test tmdb server functions', () =>{
  describe('searchMoviesByName', () => {
    var data;
    before (done => {
      searchMoviesByName('thor')
      .then(res => {
        data = res;
        done();
      })
    })
    it ('returned information should be a object', () =>{
      console.log( Object.keys(data))
      expect(data).to.be.a('object');
    })

    it ('should expect data to contain: page, total_results, total_pages, and results', () =>{
      expect(data.page).to.exist
      expect(data.total_results).to.exist
      expect(data.total_pages).to.exist
      expect(data.results).to.exist
    })
    it ('results should contain a array of movies', () =>{
    //   { vote_count : 7176,
    //     id : 10195,
    //     video : false,
    //     vote_average : 6.6,
    //     title : 'Thor',
    //     popularity : 64.852554,
    //     poster_path : '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
    //     original_language : 'en',
    //     original_title : 'Thor',
    //     genre_ids : [ 12, 14, 28 ],
    //     backdrop_path : '/LvmmDZxkTDqp0DX7mUo621ahdX.jpg',
    //     adult : false,
    //     overview : 'Against his father Odin\'s will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns
    // what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.',
    //     release_date : '2011-04-21' },

      var results = data.results
      expect(results).to.be.a('array');
      expect(results[0]).to.be.a('object');
      expect(results[0]).to.have.a.property('vote_count');
      expect(results[0]).to.have.a.property('title');
      expect(results[0].title).to.be.a('string');
      expect(results[0]).to.have.a.property('popularity');
      expect(results[0]).to.have.a.property('original_title');
      expect(results[0].original_title).to.be.a('string');
      expect(results[0]).to.have.a.property('genre_ids');
      expect(results[0]).to.have.a.property('genre_ids');
      expect(results[0].genre_ids).to.be.a('array');
      expect(results[0].genre_ids[0]).to.be.a('number');
      expect(results[0]).to.have.a.property('overview');
      expect(results[0].overview).to.be.a('string');
    })
  })


  describe ('fetchMovieById', () =>{
    var data;
    before (done => {
      fetchMovieById(10195)
      .then(res => {
        data = res;
        done();
      })
    })

    it ('return movie info should an object that contain a range of movie information', () =>{
      var expected = [ 'adult',
      'backdrop_path',
      'belongs_to_collection',
      'budget',
      'genres',
      'homepage',
      'id',
      'imdb_id',
      'original_language',
      'original_title',
      'overview',
      'popularity',
      'poster_path',
      'production_companies',
      'production_countries',
      'release_date',
      'revenue',
      'runtime',
      'spoken_languages',
      'status',
      'tagline',
      'title',
      'video',
      'vote_average',
      'vote_count' ]
      expect(data).to.be.a('object');
      expect(Object.keys(data)).to.eql(expected);
    })

        // { adult: false,
    //   backdrop_path: '/LvmmDZxkTDqp0DX7mUo621ahdX.jpg',
    //   belongs_to_collection:
    //    { id: 131296,
    //      name: 'Thor Collection',
    //      poster_path: '/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg',
    //      backdrop_path: '/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg' },
    //   budget: 150000000,
    //   genres:
    //    [ { id: 12, name: 'Adventure' },
    //      { id: 14, name: 'Fantasy' },
    //      { id: 28, name: 'Action' } ],
    //   homepage: 'http://thor.marvel.com/',
    //   id: 10195,
    //   imdb_id: 'tt0800369',
    //   original_language: 'en',
    //   original_title: 'Thor',
    //   overview: 'Against his father Odin\'s will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.',
    //   popularity: 63.852554,
    //   poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
    //   production_companies: [ { name: 'Marvel Studios', id: 420 } ],
    //   production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
    //   release_date: '2011-04-21',
    //   revenue: 449326618,
    //   runtime: 115,
    //   spoken_languages: [ { iso_639_1: 'en', name: 'English' } ],
    //   status: 'Released',
    //   tagline: 'Two worlds. One hero.',
    //   title: 'Thor',
    //   video: false,
    //   vote_average: 6.6,
    //   vote_count: 7211 }

    it ('should expect incoming data to have required information in the correct format', () =>{
      expect(data.title).to.be.a('string');
      expect(data.release_date).to.be.a('string');
      expect(data.id).to.be.a('number');
      expect(data.imdb_id).to.be.a('string');
      expect(data.budget).to.be.a('number');
      expect(data.genres).to.be.a('array');
    })
  })

  describe.only ('fetchImageById', (done) =>{
    var data;
    before (done => {
      fetchImageById(10195)
      .then(res => {

        data = res;
        done();
      })
      .catch(err => {
        done(err)
      })
    })

    // data [ '/LvmmDZxkTDqp0DX7mUo621ahdX.jpg',
    // '/siiHsWPaP2r8hqPiQsry61gCjGY.jpg',
    // '/6UxFfo8K3vcihtUpX1ek2ucGeEZ.jpg',
    // '/sHFhe9tZ9CR9udl6WwI1rcYrnMQ.jpg',
    // '/7sIPOlNuFeskJdUo0wa1oiIzP90.jpg',
    // '/3SDoquTjagne0jWzdxEu31KFLmw.jpg',
    // '/eLVtKgcOEalUuDyj3Ca6UYrsmoZ.jpg',
    // '/fapU8ef9SrZHU8MEgwukR4ZIdI4.jpg',
    // '/9uUwS2nohMcT1f6CxXovYap23nE.jpg',
    // '/AptT5s6HA8Fgkiuqz5hyUuABjDx.jpg',
    // '/orjBjIpkJAx9Ki88L6PzqUEbYRZ.jpg',
    // '/iWfu3NYWFLyYtj1ddUEsrg8jw7f.jpg',
    // '/vEMTVCbGwkWg2s7OaUZw1re9dST.jpg',
    // '/h8OcfaiTydrfMl0i5R1sB4Pcswu.jpg',
    // '/9BN8zdB1gZejgOzkizqAzr5oeno.jpg',
    // '/vXSeaYZ959Tt4uYMuVBdVzH735M.jpg',
    // '/96A856tCyERcMgoJs5fUuXYXjPe.jpg',
    // '/nxTwsHYotelqITsXuuI1oFUTbhM.jpg',
    // '/gzIQ4iKzn6bI88PHLzSPaE2i2JG.jpg',
    // '/6donuzAUv5xpuhi4Al2TZLKbuFU.jpg',
    // '/jMizWmLxG3ud5pkMhtawFRe9VI1.jpg',
    // '/dcrQoYl2mGxvpdp8RNdSuge5g2e.jpg',
    // '/ajSdBkj8NOKJGFTM3NB8OyUyEMW.jpg' ]


    it ('data returned should be an array', () =>{
      expect(data).to.be.a('array');
    })
    it.only ('data array should contain image string', () =>{
      expect(data[0]).to.be.a('string');
      expect(data[0].slice(-4, -3)).to.equal('.');
      expect(data[0].slice(-3,)).to.be.oneOf(['bmp', 'jpg', 'png', 'gif']);
    })
  })
})