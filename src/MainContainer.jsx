import React, { Component, Fragment } from 'react';
import EventGenerator from './EventGenerator';
import EventContainer from './EventContainer';
import './styles/main-container.scss';

class MainContainer extends Component {
  render() {
    return (
    <div className="main-container">
        {this.props.userinfo.name ? (
          <Fragment>
          <EventContainer
          itinerary={this.props.itinerary}
          userGivenLocation={this.props.userGivenLocation}
          route={this.props.route}
          params={this.props.params}
          userinfo={this.props.userinfo}
          derping={this.props.derping}
          generateItinerary={this.props.generateItinerary}
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
          </Fragment>
          ) : (
            <h3>Please Signup or Login first!</h3>
          )}

    </div>);
  }
}

export default MainContainer;