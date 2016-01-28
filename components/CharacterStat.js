'use strict';
import React, {
  Component,
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class CharacterStat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Image source={data.image} style={[style_ids.background]} resizeMode='contain' >
        <View style={[style_ids.controls]} >
          <Text style={[style_ids.controls_buttons, {left: 0}]} >{'Back'}</Text>
          <Text style={[style_ids.controls_buttons, {right: 0}]} >{'Reset'}</Text>
        </View>
      </Image>
    );
  }
}

const style = {
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  controls: {
  },
  controls_buttons: {
    flex: 1,
    bottom: 0,
  },
}
const style_ids = StyleSheet.create(style);
