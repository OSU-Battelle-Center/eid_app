import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import L from 'leaflet'


// class Basemap extends Component {
// componentDidMount() {
//
// }
//
//   render() {
//     var mymap = L.map('Basemap').setView([51.505, -0.09], 13);
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
//   }).addTo(mymap);
//   return (
//     <div className="Basemap" id="Basemap"></div>
//   );
//   }
// }
//
// export default Basemap;

export default class Basemap extends Component {
  componentDidMount() {
    this.map();
  }

  map() {
    var basemap = L.map('map').setView([18.1399, -0.7317], 3);

    L.tileLayer('https://api.mapbox.com/styles/v1/djabernathy/cjhtlq6d5019s2spbfenwpy8m/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGphYmVybmF0aHkiLCJhIjoiY2pmZzE2NGw2MjJkdjMzbWkxMnRqMnh5NCJ9.MuXblUUZsFV0ibyEQz2AJw').addTo(basemap);
  }



    // https://storage.googleapis.com/africa_nonforest/africa_nonforest_tile/{z}/{x}/{y}

  render() {
    return <div id="map"></div>
  }
}
