import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SkeletonItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.e} <Button bsStyle="danger" onClick={this.props.delete}><i class="fas fa-trash-alt"></i></Button> </li>
      </div>
    );
  }
}

export default SkeletonItem;