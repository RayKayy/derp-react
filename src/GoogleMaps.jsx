import React, { Component } from 'react';
import randomColor from 'randomcolor'


class Map extends Component {

  loadMap = () => {
    let mapOption = {
      center: { lat: this.props.userGivenLocation.lat, lng: this.props.userGivenLocation.lng }, // toronto
      zoom: 13,
      mapTypeControl: false,
      draggableCursor: 'default'
    }
    console.log(this.props.route.routes);

    const journey = []

    const { legs } = this.props.route.routes[0]
    legs.forEach(x => {
      const path = []
      x.steps.forEach(step => {
        path.push(step.start_location)
        path.push(step.end_location)
      })
      const polyline = new window.google.maps.Polyline({
        strokeColor: randomColor(),
        strokeWeight: 4,
        path,
      });
      journey.push(polyline)
    })
    const map = new window.google.maps.Map(document.getElementById('map'), mapOption);
    this.onMapLoad(map, this.props.itinerary)
    journey.forEach(line => line.setMap(map))
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