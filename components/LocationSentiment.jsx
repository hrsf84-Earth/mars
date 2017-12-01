import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import moment from 'moment';
<<<<<<< HEAD
import Emotion from './Emotion';
=======
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Legend } from 'recharts';
>>>>>>> Remove extra logging, add in comments re: features built, retain twitterLocation.js for now till the map feature is built

class LocationSentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null || 37.7578149,
      longitude: null || -122.5078117
    };

  }

  render() {
    const { emotion } = this.props;
    let view;

    // if the emotion object exists, it will replace null values with zero
    // it will multiply the index values by 100
    // and render the Sentiment Index view histogram
    if (emotion) {
      const emotions = Object.keys(emotion).map(key => {
          return { 'name': [key], 'Sentiment Index': emotion[key] ? emotion[key] * 100 : 0 }
      });

      view = (
        <div>
          <div>Lat: {this.state.latitude}</div>
          <div>Long: {this.state.longitude}</div>
          <div id="Sentiment">
            <BarChart width={1000} height={400} data={emotions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Sentiment Index', angle: -90, position: 'insideLeft' }} />
              <Legend verticalAlign="top" />
              <Bar dataKey="Sentiment Index" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>{this.state.latitude}</div>
        <div>{this.state.longitude}</div>
      </div>
    );
  }
}

LocationSentiment.propTypes = {
  locationSentiment: PropTypes.shape({
    sadness: PropTypes.number,
    joy: PropTypes.number,
    fear: PropTypes.number,
    disgust: PropTypes.number,
    anger: PropTypes.number,
  })
};

export default LocationSentiment;