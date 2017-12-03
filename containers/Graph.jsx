import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';
import { combineTwoLines, createTrends } from '../reducers/graphData'
import Store from '../public/index.jsx'

function Graph(props) {
  var data;
  var view = props.mainView;
  if (view === 'graphAbsolute') {
    data = props.graphData;
  } else if (view === 'graphRelative') {
    // console.log('store state', Store.getState())
    var store = Store.getState()
    // console.log('store', store.secondaryMovie.title, store.secondaryMovie)
    if (store.secondaryMovie.title){
      data = combineTwoLines(createTrends(store.primaryMovie.trendData), createTrends(store.secondaryMovie.trendData), true)
    } else {
      data = props.graphData;
    }
  }
  return (
    <div id="graph">
      <LineChart width={1000} height={400} data={data}>
        <Line name={props.primaryMovie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#8884d8" />
        <Line name={props.secondaryMovie.title || ' '} type="monotone" dataKey="secondaryTrendVolume" stroke="#FF0000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey={view === 'graphAbsolute'? 'date': 'dateRelative'}>
          <Label value={view === 'graphAbsolute'? 'Date': '+/- week with zero at release date'} offset={0} position="insideBottom" />
        {/* <XAxis dataKey="date">
          <Label value={view === 'graphAbsolute'? 'Date': '+/- week with zero at release date'} offset={0} position="insideBottom" /> */}
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
