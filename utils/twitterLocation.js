const axios = require('axios');
const Emotion = require('./twitterEmotion');

module.exports.avgLocationEmotion = function (twitterSearchTerm, lat, long) {
  let geocodeString =  '37.7578149' + ',' + '-122.5078117' + ',' + '50mi'
  // let geocodeString = lat + ',' + long + ',' + '50mi'
  return axios.get(
    Emotion.twitterApiUrl,
    {
      params: {
        q: 'coco',
        // q: twitterSearchTerm,
        geocode: geocodeString
      },
      headers: {
        Authorization: `Bearer ${Emotion.twitterToken}`,
      },
    },
  )
    .then(res => res.data.statuses.map(status => status.text))
    .then((texts) => {
      const emotions = [];
      texts.forEach(text => emotions.push(Emotion.getEmotions(text)));
      return Promise.all(emotions);
    })
    .then((emotions) => {
      const avgEmotion = {
        sadness: 0, joy: 0, fear: 0, disgust: 0, anger: 0,
      };
      const props = Object.keys(avgEmotion);
      let emotionCount = 0;
      emotions.forEach((emotion) => {
        if (emotion) {
          for (let i = 0; i < props.length; i += 1) {
            avgEmotion[props[i]] += emotion.data.emotion.document.emotion[props[i]];
          }
          emotionCount += 1;
        }
      });
      for (let i = 0; i < props.length; i += 1) {
        avgEmotion[props[i]] /= emotionCount;
      }
      return avgEmotion;
    })
    .catch((err) => {
      console.log(`error from twitter api:  ${err}`);
    });
};
