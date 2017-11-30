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
      longitude: null || props.longitude,
      emotion: null || props.emotion
    };

  }

  render() {
    const { emotion } = this.props;
    // const sadness = emotion.sadness * 100;
    // const joy = emotion.joy * 100;
    // const fear = emotion.fear * 100;
    // const disgust = emotion.disgust * 100;
    // const anger = emotion.anger * 100;
    // const isHappy = joy >= sadness &&
    //   joy >= fear &&
    //   joy >= disgust &&
    //   joy >= anger;
    // const emotions = Object.entries(emotion);

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