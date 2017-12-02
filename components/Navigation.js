import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphAbsolute, graphRelative, movieDetails, map, locationSentiment} from '../actions/switchView';
import RaisedButton from 'material-ui/RaisedButton'
import Store from '../public/index.jsx'

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      mainView: 'graphAbsolute'
    }
    // console.log ('this store', Store.getStore())
  }
  navButtonClick = (evt) => {
    // console.log(this.props.mainView, evt.target.id)
    var target = evt;
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
        console.log('button movie details')
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
    var state = this.props.mainView;
    console.log('nav view', state)
    return (
      <div>
      <RaisedButton
        id='navBtnGraph'
        onClick={(evt) => this.navButtonClick('navBtnGraph')}
        label="Graph"
        primary={state === 'graphAbsolute' ? true : false}
      ></RaisedButton>
      <RaisedButton
        id='navBtnGraphRelative'
        onClick={(evt) => this.navButtonClick('navBtnGraphRelative')}
        label="Relative"
        primary={state === 'graphRelative' ? true : false}
      ></RaisedButton>
      <RaisedButton
        id='navBtnMovieDetails'
        onClick={(evt) => this.navButtonClick('navBtnMovieDetails')}
        label="Movie Details"
        primary={state === 'movieDetails' ? true : false}
      ></RaisedButton>
      <RaisedButton
        id='navBtnMap'
        onClick={(evt) => this.navButtonClick('navBtnMap')}
        label="Map"
        primary={state === 'map' ? true : false}
      ></RaisedButton>
      <RaisedButton
        id='navBtnTwitter'
        onClick={(evt) => this.navButtonClick('navBtnTwitter')}
        label="Twitter"
        primary={state === 'locationSentiment' ? true : false}
      ></RaisedButton>
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