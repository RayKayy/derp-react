import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './styles/item.scss';

class Item extends Component {
  render() {
    console.log(this.props.event.type);
      if (this.props.event.type === "restaurant") {
        return (
          <div className="restaurant-container">
            <a className="restaurant-url" rel="noopener noreferrer" target="_blank" href={this.props.event.url}>
              <Media className="content">
                <Media.Left align="middle">
                  <img width={64} height={64} src={this.props.event.image_url} alt="restuarant" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{this.props.event.name}</Media.Heading>
                  <p><strong>Alias: </strong>{this.props.event.categories[0].title}</p>
                  <p className="text-justify">
                    <strong>Address: </strong>{this.props.event.location.display_address.join(" ")}
                  </p>
                  <p><strong>Phone Number: </strong>{this.props.event.display_phone}</p>
                </Media.Body>
              </Media>
            </a>
          </div>
        );
      } else if (this.props.event.type === "movie") {
        const posterUrl = this.props.event.posters ? this.props.event.posters.image_files[0].url : ""
        return (
          <div className="movie-container">
            <a target="_blank" rel="noopener noreferrer" className="movie-url" href={this.props.event.booking_link}>
              <Media className="content">
                <Media.Left align="middle">
                  <img width={64} height={64} src={posterUrl} alt="movie poster" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{this.props.event.title}</Media.Heading>
                  <h5>{this.props.event.cinema.name}</h5>
                  <p className="text-justify">
                    <strong>Address: </strong>{this.props.event.cinema.location.address.display_text}
                  </p>
                  <p><strong>Synopsis: </strong>{this.props.event.synopsis}</p>
                  <p><strong>Runetime: </strong>{this.props.event.runtime} Minutes</p>
                  <p><strong>Showtime: </strong>{new Date(this.props.event.start_at).toString().slice(0, -33)}</p>
                </Media.Body>
              </Media>
            </a>
          </div>
        );
      } else {
        return (
          <div className="error-container">
            {this.props.event.error}
          </div>
        );
      }
    }
  }

export default Item;