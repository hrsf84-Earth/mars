import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Title from '../components/Title';
import Graph from './Graph';
import MovieInfo from '../components/MovieInfo';
import Navigation from '../components/Navigation';

const style = { padding: '35px' };

import Store from '../public/index.jsx'

function MovieDetail(props) {
  var { mainView } = props.mainView;
  var returnDom;
  console.log('props', mainView)
  if (mainView === 'graphAbsolute') {
    var returnDom =
      <Graph
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
  } else if (mainView === 'graphRelative') {
    var returnDom =
      <Graph
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
  } else if (mainView === 'map') {
    var returnDom = null;
  } else {
    var returnDom = <Graph
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
      <MovieInfo
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
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
