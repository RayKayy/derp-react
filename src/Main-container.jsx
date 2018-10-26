import React, { Component } from 'react';
import EventGenerator from './EventGenerator';
import EventContainer from './EventContainer';
import './styles/main-container.scss';

class MainContainer extends Component {
  render() {
    return (
    <div className="main-container">
      <EventContainer
        itinerary={this.props.itinerary}
      />
      <EventGenerator
        params={this.props.params}
        addSkeleton={this.props.addSkeleton}
        handleDate={this.props.handleDate}
        handleEndTime={this.props.handleEndTime}
        generateItinerary={this.props.generateItinerary}
        startTime={this.props.startTime}
        endTime={this.props.endTime}
        showForm={this.props.showForm}
        toggleForm={this.props.toggleForm}
        removeSkeletonItem={this.props.removeSkeletonItem}
        userInputedLocation={this.props.userInputedLocation}
      />
    </div>);
  }
}

export default MainContainer;