import React from 'react';
import { Panel, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const ItemPanel = (props) => {
  switch (props.event.type) {
    case 'restaurant':
      return (
        <Panel className="event-item" bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{props.event.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body className="event-body">
              <Image className="event-img" src={props.event.image_url} rounded responsive />
              <ListGroup>
                <ListGroupItem><strong>Category:</strong> {props.event.categories[0].title}</ListGroupItem>
                <ListGroupItem><strong>Address:</strong> {props.event.location.display_address.join(" ")}</ListGroupItem>
              <ListGroupItem><strong>Contact:</strong> {props.event.display_phone ? props.event.display_phone : 'N/A'}</ListGroupItem>
                <ListGroupItem>
                  <a rel="noopener noreferrer" target="_blank" href={props.event.url}>
                    <img className="yelp-logo" src="./yelp-logo.png" alt="Yelp Logo" />
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Panel.Body>
          </Panel>
        )
    case 'movie':
      const posterUrl = props.event.posters ? props.event.posters.image_files[0].url : ""
      return (
        <Panel className="event-item" bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{props.event.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body className="event-body">
            <Image className="event-img" src={posterUrl} rounded responsive />
            <ListGroup>
              <ListGroupItem><strong>Showtime: </strong>{new Date(props.event.start_at).toString().slice(0, -33)}</ListGroupItem>
              <ListGroupItem><strong>Synopsis: </strong>{props.event.synopsis}</ListGroupItem>
              <ListGroupItem><strong>Runtime: </strong>{props.event.runtime} Minutes</ListGroupItem>
              {props.event.booking_link && (
                <ListGroupItem>
                  <Button target="_blank" href={props.event.booking_link}>Buy Ticket</Button>
                </ListGroupItem>
              )}
            </ListGroup>
          </Panel.Body>
        </Panel>
      )
    default:
      return (
        <Panel className="event-item" bsStyle="warning">
          <Panel.Heading><Panel.Title componentClass="h3">Could Not Find Specified Event In Timeframe</Panel.Title></Panel.Heading>
        </Panel>
      )
  }
}

export default ItemPanel;