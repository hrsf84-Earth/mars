import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Title from '../components/Title';
import Graph from './Graph';
import MovieInfo from '../components/MovieInfo';

const style = { padding: '35px' };

function MovieDetail(props) {
  return (
    <Paper zDepth={1} style={style}>
      <Title
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
      <Graph
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
      <MovieInfo
        primaryMovie={props.primaryMovie}
        secondaryMovie={props.secondaryMovie}
      />
    </Paper>
  );
}

MovieDetail.propTypes = {
  primaryMovie: PropTypes.shape({}).isRequired,
  secondaryMovie: PropTypes.shape({}).isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

function mapStateToProps({ primaryMovie, secondaryMovie, latitude, longitude }) {
  return { primaryMovie, secondaryMovie, latitude, longitude };
}

export default connect(mapStateToProps)(MovieDetail);
