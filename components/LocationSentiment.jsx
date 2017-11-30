import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import moment from 'moment';

class LocationSentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null || props.latitude,
      longitude: null || -122.5078117,
      emotion: null || props.emotion
    };

  }

  render() {
    const { emotion } = this.props;

    return (
      <div>
        <div>{this.state.latitude}</div>
        <div>{this.state.longitude}</div>
        <div>{this.state.emotion}</div>
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