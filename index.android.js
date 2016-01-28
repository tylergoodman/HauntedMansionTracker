'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import character_data from './data/character_data';
import CharacterList from './components/CharacterList';
import CharacterStat from './components/CharacterStat';

class HauntedMansionTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_character: null,
      saved_char_data: null,
    };
  }

  _selectChar(selected_character) {
    this.setState({
      selected_character,
    });
  }

  _saveCharData(id, data) {
    const { saved_char_data } = this.state;
    saved_char_data[id] = data;
    this.setState({
      saved_char_data,
    });
  }

  render() {
    const { selected_character } = this.state;
    return (
      selected_character === null ?
        <CharacterList data={character_data} onSelect={this._selectChar.bind(this)} /> :
        <CharacterStat data={character_data[selected_character]} onSave={this._saveCharData.bind(this, selected_character)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HauntedMansionTracker', () => HauntedMansionTracker);
