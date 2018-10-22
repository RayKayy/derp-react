import React, { Component } from 'react';
import Restaurant from './Restaurant';
import './styles/event-container.scss';

class EventContainer extends Component {
  render() {
    return (
      <div className="event-container">
        <Restaurant restaurant={this.props.restaurant}/>
        <Restaurant restaurant={this.props.restaurant}/>
      </div>);
  }
}

export default EventContainer;