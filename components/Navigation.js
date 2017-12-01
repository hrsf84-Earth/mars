import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphAbsolute, graphRelative, movieDetails, map, locationSentiment} from '../actions/switchView';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      mainView: 'graphAbsolute'
    }
  }
  navButtonClick = (evt) => {
    console.log(evt.target)
    var target = evt.target.id;
    switch (target) {
      case 'navBtnGraph': {
        this.props.graphAbsolute();
        break;
      }
      case 'navBtnGraphRelative': {
        this.props.graphRelative();
        break;
      }
      case 'navBtnMovieDetails': {
        this.props.movieDetails();
        break;
      }
      case 'navBtnMap': {
        this.props.map();
        break;
      }
      case 'navBtnTwitter': {
        this.props.locationSentiment();
        break;
      }
    }

  }
  render () {
    return (
      <div>
      <button id='navBtnGraph' onClick={(evt) => this.navButtonClick(evt)} >Graph</button>
      <button id='navBtnGraphRelative' onClick={(evt) => this.navButtonClick(evt)} >Relative</button>
      <button id='navBtnMovieDetails' onClick={(evt) => this.navButtonClick(evt)} >MovieDetails</button>
      <button id='navBtnMap' onClick={(evt) => this.navButtonClick(evt)} >Map</button>
      <button id='navBtnTwitter' onClick={(evt) => this.navButtonClick(evt)} >Twitter</button>
    </div>
    )
  }
}

function mapStateToProps({ mainView }) {
  return { mainView };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ graphAbsolute, graphRelative, movieDetails, map, locationSentiment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);