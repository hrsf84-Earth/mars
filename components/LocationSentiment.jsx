import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
// import { List, ListItem } from 'material-ui/List';
// import { yellow100, yellow500, red100, red500 } from 'material-ui/styles/colors';
// import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import moment from 'moment';
import Emotion from './Emotion';

class LocationSentiment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      anchorEl: null,
      latitude: 37.7578149,
      longitude: -122.5078117
      // latitude: null,
      // longitude: null
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(e) {
    e.preventDefault();

    this.setState({
      isOpen: true,
      anchorEl: e.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { emotion } = this.props;
    const sadness = emotion.sadness * 100;
    const joy = emotion.joy * 100;
    const fear = emotion.fear * 100;
    const disgust = emotion.disgust * 100;
    const anger = emotion.anger * 100;
    const isHappy = joy >= sadness &&
      joy >= fear &&
      joy >= disgust &&
      joy >= anger;
    const emotions = Object.entries(emotion);

    return (
      <div>
        <FlatButton
          onClick={this.handleTouchTap}
          icon={isHappy ? <SocialJoy color={lightGreen400} /> : <SocialSad color={deepOrange900} />}
        />
        <Popover
          open={this.state.isOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {emotions.map(emos => (
              <MenuItem key={emos[0]} primaryText={`${emos[0]}: ${Number((emos[1] * 100).toFixed(2))}`} />
            ))}
          </Menu>
        </Popover>
      </div>
    );
  }
}

LocationSentiment.propTypes = {
  locationSentiment: PropTypes.shape({
    sadness: PropTypes.number,
    joy: PropTypes.number,
    fear: PropTypes.number,
    disgust: PropTypes.number,
    anger: PropTypes.number,
  }).isRequired,
};

export default LocationSentiment;