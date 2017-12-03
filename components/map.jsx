import React from 'react';
import ReactDOM from 'react-dom';
import Mapsearch from './mapsearch.jsx';

class Map extends React.Component {
  constructor(props) {
    super(props);
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
      console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
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

export default Map;
