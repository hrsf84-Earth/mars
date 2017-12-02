import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);
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
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {lat: 37.773972, lng: -122.431297}
    });
  }


  render() {
    return (<div>
      <input type="text" />
      <button> Choose location </button>

      <div className="map" ref="map" style={{marginBottom: '5px', backgroundColor: 'red', float: 'left', width: '100%', height: '390px', borderRadius: '5px'}}> </div>
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
