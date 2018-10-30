import React, { Fragment } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Panel, Image, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import * as FontAwesome from 'react-icons/fa'
import './styles/item.scss';

const ItemTimeline = (props) => {
  switch (props.event.type) {
    case 'restaurant':
      return (
        <Fragment>
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-item"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesome.FaUtensils />}
          >
            <Panel className="event-item" bsStyle="primary" defaultCollasped>
              <Panel.Heading>
                <Panel.Title toggle componentClass="h3">{props.event.name}</Panel.Title>
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
          </VerticalTimelineElement>
          {props.travel && (
            <VerticalTimelineElement
              className="vertical-timeline-element--work travel-time event-item event-body"
              iconStyle={{ background: '#d6e9c6', color: '#fff' }}
            >
              <Panel className="event-item travel-time" bsStyle="success">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{props.travel.duration.text} <FontAwesome.FaCar /></Panel.Title>
                </Panel.Heading>
              </Panel>
          </VerticalTimelineElement>)}
        </Fragment>
      )
    case 'movie':
      const posterUrl = props.event.posters ? props.event.posters.image_files[3].url : ""
      return (
        <Fragment>
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-item"
            iconStyle={{ background: '#bce8f1', color: '#fff' }}
            icon={<FontAwesome.FaFilm />}
          >
            <Panel className="event-item" bsStyle="info" defaultCollasped>
              <Panel.Heading>
                <Panel.Title toggle componentClass="h3">{props.event.title}</Panel.Title>
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
          </VerticalTimelineElement>
          {props.travel && (
            <VerticalTimelineElement
              className="vertical-timeline-element--work travel-time event-item event-body"
              iconStyle={{ background: '#d6e9c6', color: '#fff' }}
            >
              <Panel className="event-item travel-time" bsStyle="success">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{props.travel.duration.text} <FontAwesome.FaCar /></Panel.Title>
                </Panel.Heading>
              </Panel>
            </VerticalTimelineElement>)}
        </Fragment>
      )
    default:
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-item"
          iconStyle={{ background: '#ffed8d', color: '#fff' }}
          icon={<FontAwesome.FaExclamation />}
        >
          <Panel className="event-item" bsStyle="warning">
            <Panel.Heading><Panel.Title componentClass="h3">Could Not Find Specified Event In Timeframe</Panel.Title></Panel.Heading>
          </Panel>
        </VerticalTimelineElement>
      )
  }
}

export default ItemTimeline;