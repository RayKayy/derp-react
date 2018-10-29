import React, { Component } from 'react';
import ItemPanel from './ItemPanel'
import GoogleApiComponent from './GoogleApiComponent';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ItemTimeline from './ItemTimeline';
import './styles/event-container.scss';

class EventContainer extends Component {
  render() {
    const route = this.props.route;
    if (this.props.itinerary.length >= 1) {
      return (
        <div className="event-container">
<<<<<<< HEAD
          <VerticalTimeline layout='one-column'>
            {this.props.itinerary.map((event, i) => <ItemTimeline key={`timeline${i}`} event={event} travel={route.routes[0].legs[i]} />)}
          </VerticalTimeline>
          <GoogleApiComponent userGivenLocation={this.props.userGivenLocation} itinerary={this.props.itinerary} route={this.props.route}/>
=======
          {this.props.itinerary.map((event, i) => <ItemPanel key={`event${i}`} event={event} travel={route.routes[0].legs[i]} />)}
          <GoogleApiComponent params={this.props.params} userGivenLocation={this.props.userGivenLocation} itinerary={this.props.itinerary} route={this.props.route}/>
>>>>>>> f7bc0153294d0706cdec628ca0b07db4d8cb3885
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