import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';
import { combineTwoLines } from '../reducers/graphData'

function Graph(props) {
  var data;
  var view = props.mainView;
  if (view === 'graphAbsolute') {
    data = props.graphData;
  } else if (view === 'graphRelative') {
    // data  combineTwoLines(this.props.primaryGraph, this.props.secondaryGraph)
  }
  return (
    <div id="graph">
      <LineChart width={1000} height={400} data={data}>
        <Line name={props.primaryMovie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#8884d8" />
        <Line name={props.secondaryMovie.title || ' '} type="monotone" dataKey="secondaryTrendVolume" stroke="#FF0000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </div>
  );
}

Graph.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  primaryMovie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  secondaryMovie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ graphData, mainView }) {
  return { graphData, mainView };
}

export default connect(mapStateToProps)(Graph);
