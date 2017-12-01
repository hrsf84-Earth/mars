import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

class LocationSentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };

  }

  render() {
    const { emotion } = this.props;
    let view;

    // If emotion object exists, render the graph.
    // Hardcode all null or invalid values to zero
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
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="Sentiment Index" fill="#f44336" />
            </BarChart>
          </div>
        </div>
      );
    }

    return (
       <div>Emotions: {view}</div>
    );
  }
}

LocationSentiment.propTypes = {
  emotion: PropTypes.shape({
    sadness: PropTypes.number,
    joy: PropTypes.number,
    fear: PropTypes.number,
    disgust: PropTypes.number,
    anger: PropTypes.number,
  })
};

export default LocationSentiment;