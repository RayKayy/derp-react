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
                  <p className="text-justify">
                    {this.props.event.location.display_address.join(" ")}
                  </p>
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
                  <p className="text-justify">
                    {this.props.event.cinema.location.address.display_text}
                  </p>
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