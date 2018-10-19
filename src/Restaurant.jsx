import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './styles/restaurant.scss';

class Restaurant extends Component {
  render() {
    return (
      <div className="restaurant-container">
        <Media className="content">
          <Media.Left align="middle">
            <img width={64} height={64} src="/thumbnail.png" alt="rest img" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>The Keg</Media.Heading>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default Restaurant;