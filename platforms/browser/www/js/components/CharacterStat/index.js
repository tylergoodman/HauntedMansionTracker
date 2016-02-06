'use strict';
import React, { Component } from 'react';
import CharacterPortrait from '../CharacterPortrait';
import Stat from '../Stat';
import './styles.scss';

export default class CharacterStat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, stats, onSave } = this.props;
    return (
      <div className='CharacterStat'>
        <div className='background-overlay' style={{backgroundImage: `url(${image})`}} />
        <div className='controls'>
          <button onClick={this.props.onReturn}>Return</button>
          <button onClick={this.props.onReset}>Reset</button>
        </div>
        <div className='stats'>
          {Object.entries(stats).map(([name, data], i) =>
            <Stat key={i} name={name} {...data} onChange={this.props.onSave.bind(this, name)} />)}
        </div>
      </div>
    );
  }
}
