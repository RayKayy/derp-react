import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
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
    const style = {
      width: '100%',
      height: '300%'
    }
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="map"
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
            <h4>Wrapped Text</h4>
            <Map
              google={this.props.google}
              zoom={14}
              style={style}
              className="map">

              <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>hi</h1>
                </div>
              </InfoWindow>
            </Map>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDcFke1ZrAdWqgp5zG_oQvzXP7-uHcnAt4'),
  libraries: ['places']
})(GoogleApiComponent)