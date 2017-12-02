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
    const { primaryMovie, secondaryMovie, primaryEmotion, secondaryEmotion } = this.props;
    let view;
    let primaryTitle = primaryMovie.title;
    let secondaryTitle = secondaryMovie.title;

    // If emotion object exists, render the graph.
    // Hardcode all null or invalid values to zero
    if (primaryMovie.emotion ) {
      let emotions = [];

      for (var k in primaryEmotion) {
        let emotion = {};
          emotion['name'] = k;
          emotion[primaryTitle] = primaryEmotion[k] ? Math.round(primaryEmotion[k] * 100) : 0;
        emotions.push(emotion);
      }

      // Conditional render for a second movie that is passed through
      if (secondaryEmotion) {
        for (var k in secondaryEmotion) {
          emotions.forEach(function(element) {
            if (k === element['name']) {
              element[secondaryTitle] = secondaryEmotion[k] ? Math.round(secondaryEmotion[k] * 100) : 0;
            }
          });
        }

        var secondBar = (<Bar dataKey={secondaryTitle} fill="#b2ebf2" />);
      }

      // Conditional render for the first movie passed through
      view = (
        <div>
          <div id="Sentiment">
            <BarChart width={1000} height={400} data={emotions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Sentiment Index', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey={primaryTitle} fill="#f44336" />
              {secondBar}
            </BarChart>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h4>Current Local Sentiment</h4>
        {view}
      </div>
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