import React, { Component } from 'react';
import EventGeneratorButton from './EventGeneratorButton';
import EventContainer from './EventContainer';
import './styles/main-container.scss';

class MainContainer extends Component {
  render() {
    return (
    <div className="main-container">
      <EventGeneratorButton />
        <EventContainer restaurant={this.props.restaurant}/>
    </div>);
  }
}

export default MainContainer;