'use strict';
import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import CharacterList from '../CharacterList';
import CharacterStat from '../CharacterStat';
import './styles.scss';

export default class HauntedMansionTracker extends Component {
  constructor(props) {
    super(props);
    const char_data = cloneDeep(props.data);
    for (let char of char_data) {
      for (let stat of Object.values(char.stats)) {
        stat.actual = stat.start;
      }
    }
    this.state = {
      selected_character: null,
      char_data,
    };
  }

  selectChar(selected_character) {
    this.setState({
      selected_character,
    });
  }

  saveCharStats(id, stat, val) {
    const { char_data } = this.state;
    char_data[id].stats[stat].actual = val;
    this.setState({
      char_data,
    });
  }

  resetCharStats(id) {
    const { char_data } = this.state;
    const char = char_data[id];
    for (let stat of Object.values(char.stats)) {
      stat.actual = stat.start;
    }
    this.setState({
      char_data,
    });
  }

  render() {
    const { selected_character, char_data } = this.state;
    let route = selected_character === null ?
      (<CharacterList data={this.props.data} onSelect={this.selectChar.bind(this)} />) :
      (<CharacterStat {...char_data[selected_character]} onSave={this.saveCharStats.bind(this, selected_character)} onReset={this.resetCharStats.bind(this, selected_character)} onReturn={this.selectChar.bind(this, null)} />);
    return (
      <div className='HauntedMansionTracker'>
        {route}
      </div>
    );
  }
}
