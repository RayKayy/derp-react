import React, { Component } from 'react';


class Map extends Component {

  loadMap = () => {
    let mapOption = {
      center: { lat: 43.6529, lng: -79.3849 }, // toronto
      zoom: 15,
      mapTypeControl: false,
      draggableCursor: 'default'
    }
    new window.google.maps.Map(document.getElementById('map'), mapOption);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://maps.google.com/maps/api/js?key=AIzaSyCZGbqxiI2Xpm1Hkq1b0775CsZENcvaklU';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', () => {
        this.loadMap();
      })
    } else {
      this.loadMap()
    }
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