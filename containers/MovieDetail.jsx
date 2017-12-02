import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Title from '../components/Title';
import Graph from './Graph';
import MovieInfo from '../components/MovieInfo';
import Navigation from '../components/Navigation';
import Location from '../containers/Location';

const style = { padding: '35px' };

import Store from '../public/index.jsx'

function MovieDetail(props) {
  var mainView = props.mainView;
  var returnDom;
  if (mainView === 'graphAbsolute') {
    returnDom =
      <Graph
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
  } else if (mainView === 'graphRelative') {
    returnDom =
      <Graph
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
  } else if (mainView === 'movieDetails') {
    returnDom =
     <MovieInfo
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
  } else if (mainView === 'map') {
    returnDom = null;
  } else if (mainView === 'locationSentiment') {
    returnDom = <Location />;
  } else {
    returnDom =
    <Graph
      primaryMovie={props.primaryMovie}
      secondaryMovie={props.secondaryMovie}
    />
  }

  return (
    <Paper zDepth={1} style={style}>
      <Title
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
      <Navigation
      />
      {returnDom}
    </Paper>
  );
}

MovieDetail.propTypes = {
  primaryMovie: PropTypes.shape({}).isRequired,
  secondaryMovie: PropTypes.shape({}).isRequired
};

function mapStateToProps({ primaryMovie, secondaryMovie, latitude, longitude, mainView }) {
  return { primaryMovie, secondaryMovie, latitude, longitude, mainView };
}

export default connect(mapStateToProps)(MovieDetail);
