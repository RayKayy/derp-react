import React, { Component, Fragment } from 'react';
import { Button, FormGroup, ControlLabel, Table } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles/event-generator.scss';
import './styles/react-datetime.scss';
import Datetime from 'react-datetime';
import LocationSelect from './LocationSelect';
import SkeletonItem from './SkeletonItem';
import LoadingBalls from './LoadingBalls'
import * as FontAwesome from 'react-icons/fa';

class EventGenerator extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: 'Restaurant',
    }
  }

  _handleChange = (e) => {
    this.setState({ type: e.target.value });
  }

  _addSkeleton = type => () => {
    this.props.addSkeleton(type);
  }

  _handleDate = (date) => {
    this.props.handleDate(date._d);
  }

  _handleEndTime = (time) => {
    this.props.handleEndTime(time._d);
  }



  render() {
    return (
      <div className="event-generator">
        {/* {this.props.params.skeleton.length === 0 && <h2>Add events to your Itinerary</h2>} */}
        <ReactCSSTransitionGroup
          transitionName="form"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionLeave={true}>

          {this.props.showForm && (
            <Fragment>
              <Button onClick={this.props.generateItinerary} className="derp" bsStyle="success" bsSize="large">
                {this.props.derping ? <LoadingBalls /> : 'DERP'}
              </Button>
              <FormGroup controlId="formControlsSelect">
                <LocationSelect userInputedLocation={this.props.userInputedLocation} />
                <h5>Select start time</h5>
                <Datetime onChange={this._handleDate} value={this.props.startTime} />
                <h5>Select end time</h5>
                <Datetime onChange={this._handleEndTime} value={this.props.endTime} />
                <ControlLabel >Choose an option and click add to build an itinerary.</ControlLabel>
                <br />
                <Button className="add-skele" bsStyle="success" onClick={this._addSkeleton('Restaurant')} ><i className="fas fa-utensils"></i> Restaurant <i className="fas fa-plus"></i></Button>
                <Button className="add-skele" bsStyle="success" onClick={this._addSkeleton('Movie')} ><i className="fas fa-film"></i> Movie <i className="fas fa-plus"></i></Button>
              </FormGroup>
              <Table responsive className="skeleton">
                <thead><th>Itinerary Template</th></thead>
                <tbody>
                  {this.props.params.skeleton.map((e, i) => <SkeletonItem key={`skeleton${i}`} delete={this.props.removeSkeletonItem(i)} e={e} /> )}
                </tbody>
              </Table>
            </Fragment>
          )}

        </ReactCSSTransitionGroup>
        <Button onClick={this.props.toggleForm}>Add or Change events to your Itinerary <FontAwesome.FaEdit /></Button>
    </div>
    );
  }
}

export default EventGenerator;