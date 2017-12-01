import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

class LocationSentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };

  }

  render() {
    const { emotion } = this.props;
    let view;

    if (emotion) {
      console.log(this.store);
      console.log(emotion);

      const sadness = emotion.sadness === null ? 0 : emotion.sadness * 100;
      const joy = emotion.joy === null ? 0 : emotion.joy * 100;
      const fear = emotion.fear === null ? 0 : emotion.fear * 100;
      const disgust = emotion.disgust === null ? 0 : emotion.disgust * 100;
      const anger = emotion.anger === null ? 0 : emotion.anger * 100;
      const isHappy = joy >= sadness && joy >= fear && joy >= disgust && joy >= anger;
      const emotions = Object.entries(emotion);
      // view = (<Menu>
      //       {emotions.map(emos => (
      //         <MenuItem key={emos[0]} primaryText={`${emos[0]}: ${Number((emos[1] * 100).toFixed(2))}`} />
      //       ))}
      //     </Menu>);

      view = (<div id="Sentiment">
      <BarChart width={1000} height={400} data={emotions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Sentiment Index', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </div>);
    }

  return (
     <div>Emotions: {view}</div>
  );

  }
}

//     return (
//       <div>
//         <div>Lat: {this.state.latitude}</div>
//         <div>Long: {this.state.longitude}</div>
//         <div>Title: {this.props.primaryMovie.title}</div>
//         <div>Emotions: {view}</div>
//       </div>
//     );
// function Sentiment(props) {
//   return (
//     <div id="Sentiment">
//       <BarChart width={1000} height={400} data={emotions}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis label={{ value: 'Sentiment Index', angle: -90, position: 'insideLeft' }} />
//         <Tooltip />
//         <Legend verticalAlign="top" />
//         <Bar dataKey="pv" fill="#8884d8" />
//       </BarChart>
//     </div>
//   );
// }


LocationSentiment.propTypes = {
  emotion: PropTypes.shape({
    sadness: PropTypes.number,
    joy: PropTypes.number,
    fear: PropTypes.number,
    disgust: PropTypes.number,
    anger: PropTypes.number,
  })
};

export default LocationSentiment;