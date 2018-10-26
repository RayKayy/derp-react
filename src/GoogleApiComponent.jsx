import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal} from 'react-bootstrap';
import Map from './GoogleMaps';
// import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
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
          View Locations On Map
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="map"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
            <h4>Wrapped Text</h4>
            <Map />
            {/* <Map
              google={window.google}
              zoom={14}
              style={style}
              className="map"
              initialCenter={{
                lat: 43.653908,
                lng: -79.384293
              }}>
            <DirectionsRenderer
              options={{ draggable: true }}
              ref={(r) => directionsRef = r}
              onDirectionsChanged={getDirections}
              directions={mapRoute.route} />

            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{ lat: 37.778519, lng: -122.405640 }} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>hi</h1>
                </div>
              </InfoWindow>
            </Map> */}
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