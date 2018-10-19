import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './styles/event-generator-button.scss';

class EventGeneratorButton extends Component {
  render() {
    return (
      <div className="event-generator">
        <h1>Welcome User! Plan you day with just a click of a button!!!</h1>
        <Button bsStyle="success" bsSize="large">
          DERP
        </Button>
    </div>
    );
  }
}

export default EventGeneratorButton;