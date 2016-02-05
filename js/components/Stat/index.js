'use strict';
import React, { Component } from 'react';
import classnames from 'classnames';
import './styles.scss';

export default class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  increment() {
    if (this.props.actual === this.props.values.length - 1) {
      return;
    }
    this.props.onChange(this.props.actual + 1);
  }
  decrement() {
    if (this.props.actual === 0) {
      return;
    }
    this.props.onChange(this.props.actual - 1);
  }

  render() {
    const { name, start, actual, values } = this.props;
    const vals = values.map((val, i) => <div key={i} className={classnames('value', {start: i === start})}>{val}</div>);
    return (
      <div className='Stat'>
        <div className='name'>{name}</div>
        <div className='scroller-container'>
          <div className='control icon-angle-left' onClick={this.decrement.bind(this)} />
          <div className='values-container'>
            <div className='highlight-box' />
            <div className='values' style={{transform: `translateX(${length * actual}rem)`}}>
              {vals}
            </div>
          </div>
          <div className='control icon-angle-right' onClick={this.increment.bind(this)} />
        </div>
      </div>
    );
  }
}

const length = -4.78125;
