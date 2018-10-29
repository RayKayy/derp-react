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
          <VerticalTimeline layout='one-column'>
            {this.props.itinerary.map((event, i) => <ItemTimeline key={`timeline${i}`} event={event} travel={route.routes[0].legs[i]} />)}
          </VerticalTimeline>
          <GoogleApiComponent params={this.props.params} userGivenLocation={this.props.userGivenLocation} itinerary={this.props.itinerary} route={this.props.route}/>
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