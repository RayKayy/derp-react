import React, { Component } from 'react';
import Item from './Item';
import './styles/event-container.scss';

class EventContainer extends Component {
  render() {
    return (
      <div className="event-container">
        {this.props.itinerary.map((event) => <Item event={event} />)}
      </div>);
  }
}

export default EventContainer;