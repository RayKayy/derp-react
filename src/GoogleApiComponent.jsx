import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal} from 'react-bootstrap';
import Map from './GoogleMaps';
import * as FontAwesome from 'react-icons/fa'
import './styles/googleApiComponent.scss';

class GoogleApiComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      error: false
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleHide = () => {
    this.setState({ show: false, error: false });
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.handleShow}>
          Map & Routes <FontAwesome.FaMapMarkedAlt />
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="map"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Itinerary Locations & Route
            </Modal.Title>
          </Modal.Header>
          <Map params={this.props.params} userGivenLocation={this.props.userGivenLocation} itinerary={this.props.itinerary} route={this.props.route} />
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default GoogleApiComponent;
// ({
//   apiKey: (process.env.REACT_APP_GOOGLE_KEY),
//   libraries: ['places', 'geometry', 'drawing']
// })(GoogleApiComponent)