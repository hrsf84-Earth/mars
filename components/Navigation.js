import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphAbsolute, graphRelative, movieDetails, map, locationSentiment} from '../actions/switchView';
import Store from '../public/index.jsx'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      mainView: 'graphAbsolute',
      isGraphMenuOpen: false
    }
    // console.log ('this store', Store.getStore())
  }

  graphButtonClick = (evt) => {
    evt.preventDefault();
    this.setState({
      isGraphMenuOpen: true,
      anchorEl: evt.currentTarget
    });
  }

  graphMenuClose = () => {
    this.setState({
      isGraphMenuOpen: false
    })
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
    this.graphMenuClose();
  }

  render () {
    var view = this.props.mainView;
    return (
      <div>
        <RaisedButton
          id='navBtnGraph'
          // onClick={(evt) => this.navButtonClick('navBtnGraph')}
          onClick={this.graphButtonClick}
          label="Graph"
          primary={view === 'graphAbsolute' || view === 'graphRelative' ? true : false}
        ></RaisedButton>
        <Popover
            open={this.state.isGraphMenuOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.graphMenuClose}
            autoCloseWhenOffScreen
            canAutoPosition={true}
            animated={true}
          >
            <Menu>
              <MenuItem primaryText="Sort by Date" onClick={(evt) => this.navButtonClick('navBtnGraph')} />
              <MenuItem primaryText="Sort by Relative to Release Date" onClick={(evt) => this.navButtonClick('navBtnGraphRelative')} />
            </Menu>
          </Popover>
        {/* <RaisedButton
          id='navBtnGraphRelative'
          onClick={(evt) => this.navButtonClick('navBtnGraphRelative')}
          label="Relative"
          primary={view === 'graphRelative' ? true : false}
        ></RaisedButton> */}
        <RaisedButton
          id='navBtnMovieDetails'
          onClick={(evt) => this.navButtonClick('navBtnMovieDetails')}
          label="Movie Details"
          primary={view === 'movieDetails' ? true : false}
        ></RaisedButton>
        <RaisedButton
          id='navBtnMap'
          onClick={(evt) => this.navButtonClick('navBtnMap')}
          label="Map"
          primary={view === 'map' ? true : false}
        ></RaisedButton>
        <RaisedButton
          id='navBtnTwitter'
          onClick={(evt) => this.navButtonClick('navBtnTwitter')}
          label="Twitter"
          primary={view === 'locationSentiment' ? true : false}
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