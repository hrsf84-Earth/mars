const express = require('express');
const tmdb = require('./utils/tmdb');
const { movieTrend, convertToRelative } = require('./utils/trendFetch');
const { avgTweetEmotion } = require('./utils/twitterEmotion');
const Movie = require('./db/Movie');
const walmart = require('./utils/walmart.js');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 7331;

app.get('/', (req, res) => {
  res.send('This is the landing page!');
});

app.get('/search/:movie', (req, res) => {
  tmdb.searchMoviesByName(req.params.movie).then((data) => {
    walmart.searchProductsByMovieName(req.params.movie)
    .then((ads) => {

      // console.log('server movie search: ', ads)
      res.send([data, ads]);
    })
  });
});

app.get('/movie/:tmdbId', async (req, res) => {
  const { tmdbId } = req.params;

  try {
    const movie = await Movie.findOne({ tmdbId });
    /// this is looking for the movie in the database, if it finds it, it then
    if (movie) {
      const emotion = await avgTweetEmotion(movie.title);
      const results = movie.toObject();
      results.emotion = emotion;
      return res.send(results);
    }

    const data = [await tmdb.fetchMovieById(tmdbId), await tmdb.fetchImageById(tmdbId)];
    const movieData = data[0];
    const images = data[1];

    const results = { tmdbId };
    results.title = movieData.title;
    results.productionCompanies = movieData.production_companies.map(company => company.name);
    results.genres = movieData.genres.map(genre => genre.name);
    results.budget = movieData.budget;
    results.revenue = movieData.revenue;
    // resutlts.estimatedProfit =
    results.releaseDate = movieData.release_date;
    results.images = images;

    const smData = [
      await movieTrend(results.title, results.releaseDate),
      await avgTweetEmotion(results.title),
    ];
    const trendData = convertToRelative(smData[0], results.releaseDate);
    const emotion = smData[1];

    const { timelineData } = trendData.default;
    results.trendData = timelineData.map((trend) => {
      let { formattedAxisTime, formattedAxisTimeRelative } = trend;
      if (trend.formattedAxisTime.length < 7) formattedAxisTime += ', 2017';
      return {
        formattedAxisTimeRelative,
        formattedAxisTime,
        value: (trend.value[0] / trend.value[1]) * 100,
      };
    });

    //save to db
    const movieDoc = new Movie(results);
    await movieDoc.save();

    results.emotion = emotion;
    return res.send(results);
  } catch (err) {
    console.log('response Error', err)
    return res.status(400).send(err);
  }
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
