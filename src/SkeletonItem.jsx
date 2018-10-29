import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SkeletonItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.e}</td>
        <td><Button bsStyle="danger" onClick={this.props.delete}><i class="fas fa-trash-alt"></i></Button></td>
      </tr>
    );
  }
}

export default SkeletonItem;