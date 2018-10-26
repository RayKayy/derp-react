import React, { Component } from 'react';
import Item from './Item';
import GoogleApiComponent from './GoogleApiComponent';
import './styles/event-container.scss';

class EventContainer extends Component {
  render() {
    if (this.props.itinerary.length >= 1) {
      return (
        <div className="event-container">
          {this.props.itinerary.map((event) => <Item event={event} />)}
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