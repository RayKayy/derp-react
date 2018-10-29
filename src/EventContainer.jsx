import React, { Component, Fragment } from 'react';

import { Panel } from 'react-bootstrap';
import ItemPanel from './ItemPanel'
import GoogleApiComponent from './GoogleApiComponent';
import './styles/event-container.scss';

class EventContainer extends Component {
  render() {
    const route = this.props.route;
    console.log(route);

    if (this.props.itinerary.length >= 1) {
      return (
        <div className="event-container">
          {this.props.itinerary.map((event, i) => <ItemPanel key={`event${i}`} event={event} travel={route.routes[0].legs[i]} />)}
          <GoogleApiComponent userGivenLocation={this.props.userGivenLocation} itinerary={this.props.itinerary} route={this.props.route}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default EventContainer;