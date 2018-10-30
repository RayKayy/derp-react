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
    const journey = []

    const { legs } = this.props.route.routes[0]
    legs.forEach(x => {
      const path = []
      x.steps.forEach(step => {
        let decodedPath = window.google.maps.geometry.encoding.decodePath(step.polyline.points)
        decodedPath.forEach(pt => path.push(pt))
      })
      const polyline = new window.google.maps.Polyline({
        strokeColor: randomColor(),
        strokeWeight: 4,
        path,
      });
      journey.push(polyline)
    })
    const map = new window.google.maps.Map(document.getElementById('map'), mapOption);
    this.onMapLoad(map, this.props.itinerary, this.props.params.coords)
    journey.forEach(line => line.setMap(map))
  }

  onMapLoad = (map, itinerary, userCoords) => {

    // eslint-disable-next-line
    const userLocation = new window.google.maps.Marker({
      clickable: false,
      icon: new window.google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
        new window.google.maps.Size(22, 22),
        new window.google.maps.Point(0, 18),
        new window.google.maps.Point(11, 11)),
      shadow: null,
      zIndex: 999,
      position: userCoords,
      map: map,
      title: 'User Location'
    });

    itinerary.forEach(element => {
      let infowindow;
      let infowindow2;
      if (element.type === "restaurant") {
        infowindow = new window.google.maps.InfoWindow({
          content: `<div>
          <div>
          </div>
          <h1>${element.name}</h1>
          <div>
          <p><strong>Address:</strong> ${element.location.display_address.join(" ")}</p>
          <p><strong>Phone Number:</strong> ${element.display_phone}</p>
          </div>
          </div>`
        });
      } else if (element.type === "movie") {
        infowindow2 = new window.google.maps.InfoWindow({
          content: `<div>
          <div>
          </div>
          <h1>${element.cinema.name}</h1>
          <div>
          <p><strong>Address:</strong> ${element.cinema.location.address.display_text}</p>
          <p><strong>Phone Number:</strong> ${element.cinema.telephone}</p>
          </div>
          </div>`
        });
      }

      const marker = new window.google.maps.Marker({
        position: element.route_coords,
        map: map,
        title: 'Item Locations'
      })
      if (element.type === "restaurant") {
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      } else if (element.type === "movie") {
        marker.addListener('click', function () {
          infowindow2.open(map, marker);
        });
    }

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