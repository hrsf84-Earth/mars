import React from 'react';
import ReactDOM from 'react-dom';
import Mapsearch from './mapsearch.jsx';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    const theMap = this.refs.map;
    const mapOptions = {
      center: {lat: 37.773972,
      lng: -122.431297},
      zoom: 12,
      minZoom: 3
    };

    this.initializeMap();
  }

  initializeMap() {
    var chicago = {lat: 41.850033, lng: -87.6500523};

    var INITIAL_LOCATION = {
      address: 'Chicago, Illinois',
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
        lat: this.props.lat || INITIAL_LOCATION.position.lat,
        lng: this.props.lng || INITIAL_LOCATION.position.lng
      }
    });

    this.geocoder = new google.maps.Geocoder();
  }

  onSearch(term, propType) {
    var context = this;
    this.geocoder.geocode({'address': term}, function handleResults(results, status){
      console.log('THE GEOCODER RESULTS', results, status);
      if(status === google.maps.GeocoderStatus.OK) {
        context.map.setCenter(results[0].geometry.location);
        context.marker.setPosition(results[0].geometry.location);

        return;

      }
    })
  }


  render() {
    return (<div>
      <br />
      <Mapsearch onMapSearch={this.onSearch}/>

      <div className="map" ref="map" style={{marginBottom: '5px', backgroundColor: 'red', width: '100%', height: '390px', borderRadius: '5px'}}> </div>
    </div>)
  }
}

export default Map;














// import React from 'react';
//
// class Map extends React.Component {
//
//   constructor(props) {
//     super(props)
//   }
//   componentDidMount() {
//     this.initMap();
//     //
//     // loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDYeSF4j651kM9Zyc0Agk2ABDHad1HF2U4&callback=initMap');
//   }
//
//   initMap() {
//     this.map = new google.maps.Map(this.refs.map.getDOMNode(), {
//       center: {
//           lat: 48.858608,
//           lng: 2.294471
//       } ,
//       zoom: 16
//     })
//   }
//
//
//
//   render() {
//
//
//     return (
//         <div>
//           <div ref="map"></div>
//
//         </div>
//     )
//   }
//
// }
//
// function loadJS(src) {
//   var ref = window.document.getElementsByTagName("script")[0];
//   var script = window.document.createElement("script");
//   script.src = src;
//   script.async = true;
//   ref.parentNode.insertBefore(script, ref);
// }
//
// export default Map;
