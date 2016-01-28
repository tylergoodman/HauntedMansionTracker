'use strict';
import React, {
  Component,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native';
import chunk from 'lodash/array/chunk';
import CharacterPortrait from './CharacterPortrait';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onSelect } = this.props;
    const { width, height } = Dimensions.get('window');
    let extra = 0;
    extra += (styles.parent.padding * 2) || 0;
    extra += (styles.parent.margin * 2) || 0;
    extra += (styles.parent.borderWidth * 2) || 0;
    const portrait_size = (width - extra) / 2;
    const items = this.props.data.map((char, i) => <CharacterPortrait key={i} size={portrait_size} image={char.image} style={style_ids.portrait} onSelect={onSelect.bind(this, i)} />);
    return (
      <Image source={require('../data/one_cropped.png')} resizeMode='cover' style={styles.root} >
        <ScrollView style={style_ids.parent} contentContainerStyle={style_ids.container}>
          {items}
        </ScrollView>
      </Image>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  parent: {
    padding: 10,
    // backgroundColor: '#244D47',
    // backgroundColor: '#ffffff',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  portrait: {
    // flex: 1,
    // padding: 5
    alignSelf: 'center',
  },
};
const style_ids = StyleSheet.create(styles);
