import React from 'react';
import ReactDOM from 'react-dom';
import Mapsearch from './mapsearch.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocationData } from '../actions/LocationAction';
import { updateMovie1, updateMovie2} from '../actions/MovieAction';



class Map extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);

  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap() {
    var chicago = {lat: 41.850033, lng: -87.6500523};

    var sanFrancisco = {
      address: 'San Francisco, CA',
      position: {
        lat: 37.773972,
        lng: -122.431297
      }
    }

    this.map = new google.maps.Map(this.refs.map, {
      zoom: 4,
      center: {lat: chicago.lat, lng: chicago.lng}
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: this.props.lat || sanFrancisco.position.lat,
        lng: this.props.lng || sanFrancisco.position.lng
      }
    });

    this.geocoder = new google.maps.Geocoder();
  }

  onSearch(term, propType) {
    var context = this;
    this.geocoder.geocode({'address': term}, function handleResults(results, status){
      // console.log('THE GEOCODER RESULTS', results, status);
      console.log('LAT', results[0].geometry.location.lat(), 'LNG', results[0].geometry.location.lng());
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();

      console.log('THE PROPS', context.props);

      context.props.fetchLocationData(lat, lng)

      context.props.updateMovie1(context.props.primaryMovie.tmdbId, lat, lng);

      context.props.updateMovie2(context.props.secondaryMovie.tmdbId, lat, lng);

      console.log('THE PROPS AFTER', context.props);
      if(status === google.maps.GeocoderStatus.OK) {
        context.map.setCenter(results[0].geometry.location);
        context.marker.setPosition(results[0].geometry.location);
        return;
      }
    })
  }

  render() {
    var mapStyle = {
      marginBottom: '5px', backgroundColor: 'red', width: '100%', height: '390px', borderRadius: '5px'
    }
    return (
    <div>
      <br />
      <Mapsearch onMapSearch={this.onSearch}/>

      <div className="map" ref="map" style={mapStyle}> </div>
    </div>
  )
  }
}

function mapStateToProps({ locationData }) {
  return { locationData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocationData, updateMovie1, updateMovie2 }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);
