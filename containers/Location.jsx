import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { cyan100 } from 'material-ui/styles/colors';

const style = { padding: '35px' };

function Location(props) {
  return (
    <Paper zDepth={1} style={style}>
     Location
        latitude={props.latitude}
        longitude={props.longitude}
      />
    </Paper>
  );
}

Location.propTypes = {
  latitude: PropTypes.shape({}).isRequired,
  longitude: PropTypes.shape({}).isRequired
};

function mapSentimentToProps({ latitude, longitude }) {
  return { latitude, longitude };
}

export default connect(mapSentimentToProps)(Location);
