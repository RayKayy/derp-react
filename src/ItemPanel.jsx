import React, { Fragment } from 'react';
import { Panel, Image, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './styles/item.scss';

const ItemPanel = (props) => {
  switch (props.event.type) {
    case 'restaurant':
      return (
        <Fragment>
          <Panel className="event-item" bsStyle="primary" defaultCollasped>
            <Panel.Heading>
              <Panel.Title toggle componentClass="h3">{props.event.name} <i className="fas fa-utensils"></i></Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
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
            </Panel.Collapse>
          </Panel>
          {props.travel && (<Panel className="event-item travel-time" bsStyle="success">
            <Panel.Heading>
              Travel Time: {props.travel.duration.text}
            </Panel.Heading>
          </Panel>)}
        </Fragment>
      )
    case 'movie':
      const posterUrl = props.event.posters ? props.event.posters.image_files[0].url : ""
      return (
        <Fragment>
          <Panel className="event-item" bsStyle="info" defaultCollasped>
            <Panel.Heading>
              <Panel.Title toggle componentClass="h3">{props.event.title} <i className="fas fa-film"></i></Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body className="event-body">
                <Image className="event-img" src={posterUrl} rounded responsive />
                <ListGroup>
                  <ListGroupItem><strong>Cinema Name: </strong>{props.event.cinema.name}</ListGroupItem>
                  <ListGroupItem><strong>Address: </strong>{props.event.cinema.location.address.display_text}</ListGroupItem>
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
            </Panel.Collapse>
          </Panel>
          {props.travel && (<Panel className="event-item travel-time" bsStyle="success">
            <Panel.Heading>
              Travel Time: {props.travel.duration.text}
            </Panel.Heading>
          </Panel>)}
        </Fragment>
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