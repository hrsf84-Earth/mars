import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import moment from 'moment';
import Emotion from './Emotion';

class LocationSentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null || 37.7578149,
      longitude: null || -122.5078117
    };

  }

  render() {
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