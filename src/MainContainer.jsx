import React, { Component, Fragment } from 'react';
import EventGenerator from './EventGenerator';
import EventContainer from './EventContainer';
import { NavItem } from 'react-bootstrap';
import UserSignUp from './UserSignUp';
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
            <Fragment>
              <h2>Can't decide what to do today? Let us help!</h2>
              <h4>DERP allows you to create a totally random itinerary
                <h4>based on a few filters like, date, time, and location.</h4>
              </h4>
              <h4>Create a free account and start planning now.</h4>
              <NavItem>
                <UserSignUp checkLogin={this.props.checkLogin} />
              </NavItem>
            </Fragment>
          )}

    </div>);
  }
}

export default MainContainer;