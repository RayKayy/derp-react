import React, { Component } from 'react';


class Map extends Component {

  loadMap = () => {
    let mapOption = {
      center: { lat: this.props.userGivenLocation.lat, lng: this.props.userGivenLocation.lng }, // toronto
      zoom: 13,
      mapTypeControl: false,
      draggableCursor: 'default'
    }
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    const map = new window.google.maps.Map(document.getElementById('map'), mapOption);
    directionsDisplay.setMap(map)
    this.onMapLoad(map, this.props.itinerary)
    directionsDisplay.setDirections(this.props.route)
  }

  onMapLoad = (map, itinerary) => {
    itinerary.forEach(element => {
      new window.google.maps.Marker({
        position: element.route_coords,
        map: map,
        title: 'Item Locations'
      })
    });
  }

  componentDidMount() {
      this.loadMap()

  }

  render() {
    const style = {
      width: '100%',
      height: '80vh'
    }
    return(
      <div style={style} id="map"></div>
    );
  }
}

export default Map;