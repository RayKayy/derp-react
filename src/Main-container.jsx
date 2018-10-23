import React, { Component } from 'react';
import EventGenerator from './EventGenerator';
import EventContainer from './EventContainer';
import './styles/main-container.scss';

class MainContainer extends Component {
  render() {
    return (
    <div className="main-container">
      <EventGenerator
        params={this.props.params}
        addSkeleton={this.props.addSkeleton}
        handleDate={this.props.handleDate}
        handleEndTime={this.props.handleEndTime}
      />
      {/* <EventContainer restaurant={this.props.restaurant}/> */}
    </div>);
  }
}

export default MainContainer;