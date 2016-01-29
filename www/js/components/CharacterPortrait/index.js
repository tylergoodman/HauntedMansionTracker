'use strict';
import React, { Component } from 'react';
import './styles.scss';

export default class CharacterPortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img className='CharacterPortrait' src={this.props.image} onClick={this.props.onSelect} />
    );
  }
}
