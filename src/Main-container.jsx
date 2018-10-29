import React, { Component } from 'react';
import EventGenerator from './EventGenerator';
import EventContainer from './EventContainer';
import LoadingBalls from './LoadingBalls'
import { Button } from 'react-bootstrap';
import './styles/main-container.scss';

class MainContainer extends Component {
  render() {
    return (
    <div className="main-container">
      <Button onClick={this.props.generateItinerary} className="derp" bsStyle="success" bsSize="large">
        {this.props.derping ? <LoadingBalls /> : 'DERP'}
      </Button>
      <EventContainer
        itinerary={this.props.itinerary}
        userGivenLocation={this.props.userGivenLocation}
        route={this.props.route}
        params={this.props.params}
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
        derping={this.props.derping}
      />
    </div>);
  }
}

export default MainContainer;