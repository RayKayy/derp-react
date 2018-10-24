import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './styles/event-generator.scss';
import './styles/react-datetime.scss';
import Datetime from 'react-datetime';

class EventGenerator extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: 'Restaurant'
    }
  }

  _handleChange = (e) => {
    this.setState({ type: e.target.value });
  }

  _addSkeleton = () => {
    this.props.addSkeleton(this.state.type);
  }

  _handleDate = (date) => {
    this.props.handleDate(date._d);
  }

  _handleEndTime = (time) => {
    console.log(time._d);

    // const hour = time._d.getHours();
    // let minutes = '';
    // if (time._d.getMinutes() < 10) {
    //   minutes = `0${time._d.getMinutes()}`
    // } else if (time._d.getMinutes() >= 10) {
    //   minutes = time._d.getMinutes()
    // }
    this.props.handleEndTime(time._d);
  }

  render() {
    return (
      <div className="event-generator">
        <h1>Welcome User! Plan you day with just a click of a button!!!</h1>
        <Button onClick={this.props.generateItinerary} className="derp" bsStyle="success" bsSize="large">
          DERP
        </Button>
        <h2>Add events to your Itinerary</h2>
        <FormGroup controlId="formControlsSelect">
          <h5>Select start time</h5>
          <Datetime onChange={this._handleDate} defaultValue={this.props.startTime} />
          <h5>Select end time</h5>
          <Datetime onChange={this._handleEndTime} defaultValue={this.props.endTime} />
          <ControlLabel >Choose an option and click add to build an itinerary.</ControlLabel>
          <FormControl onChange={this._handleChange} value={this.state.type} componentClass="select" placeholder="select">
            <option value="Restaurant">Restaurant</option>
            <option value="Movie">Movie</option>
          </FormControl>
        </FormGroup>

        <Button onClick={this._addSkeleton} >Add</Button>

        <h3>Itinerary</h3>
        <ul className="skeleton" >
          {this.props.params.skeleton.map((e)=> <li>{e}</li>)}
        </ul>
    </div>
    );
  }
}

export default EventGenerator;