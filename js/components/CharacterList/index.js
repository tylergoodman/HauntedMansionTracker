'use strict';
import React, { Component } from 'react';
import CharacterPortrait from '../CharacterPortrait';
import './styles.scss';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = this.props.data.map((char, i) =>
      <div key={i}>
        <CharacterPortrait key={0} image={char.image} onSelect={this.props.onSelect.bind(this, i)} />
      </div>
    );
    return (
      <div className='CharacterList'>
        {items}
      </div>
    );
  }
}
