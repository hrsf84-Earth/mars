import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphAbsolute, graphRelative, map, twitter} from '../actions/switchView';

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
      case 'navBtnMap': {
        this.props.map();
        break;
      }
      case 'navBtnMap': {
        this.props.twitter();
        break;
      }
    }

  }
  render () {
    return (
      <div>
      <button id='navBtnGraph' onClick={(evt) => this.navButtonClick(evt)} >Graph</button>
      <button id='navBtnGraphRelative' onClick={(evt) => this.navButtonClick(evt)} >Relative</button>
      <button id='navBtnMap' onClick={(evt) => this.navButtonClick(evt)} >Map</button>
      <button id='navBtnTwitter' onClick={(evt) => this.navButtonClick(evt)} >Twitter</button>
    </div>
    )
  }
}


// Navigation.propTypes = {
//   navButtonClick: PropTypes.func.isRequired,
// }

//state
function mapStateToProps({ mainView }) {
  return { mainView };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ graphAbsolute, graphRelative, map, twitter }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
