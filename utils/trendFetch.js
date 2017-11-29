const googleTrends = require('google-trends-api');
const moment = require('moment');

module.exports.timeLine = googleTrends.interestOverTime;

//return a promise
module.exports.movieTrend = function(title, releaseDate, relativeStartMonths = 6, relativeEndMonths = -6) {
	var options = {
		keyword: [title, 'movies'],
		startTime: moment(releaseDate).add(relativeEndMonths,'months').toDate(),
		endTime: moment(releaseDate).add(relativeStartMonths,'months').toDate()
	}
	return googleTrends.interestOverTime(options);
}

module.exports.convertToRelative = function () {return }
// argument: options object
// returns a promise with a JSON string resultd
// options has form:
// {
//   keyword: String or Array,
//   startTime: Date() (default: Jan 1 2004),
//   endTime: Date() (default: now),
//   geo: location (default: all),
//   hl: language (default: english),
//   category: String (default: all),
// }

// JSON.parse(result).default.timelineData is an array
// timelineData[i] has form:
// {
//   time: String,
//   formattedTime: String,
//   formattedAxisTime: String,
//   value: Number or Array,
//   formattedValue: String
// }

// EXAMPLE
// var options = {
//   keyword: ['Beauty and the Beast', 'movies'],
//   startTime: new Date(2017, 1)
// };
// googleTrends.interestOverTime(options)
// .then(function(results){
//   var output = JSON.parse(results);
//   console.log('trend result: ', output.default.timelineData);
// })
// .catch(function(err){
//   console.error('error: ', err);
// });