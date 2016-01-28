'use strict';
import React, {
  Component,
  Image,
  StyleSheet,
  PropTypes,
  View,
  TouchableHighlight
} from 'react-native';

export default class CharacterPortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    size: PropTypes.number.isRequired,
    style: View.propTypes.style
  };

  static contextTypes = {
    style: View.propTypes.style
  };

  render() {
    const style = {
      borderRadius: this.props.size / 2,
      borderStyle: 'solid',
      borderColor: '#000000',
      borderWidth: 5,
      margin: 2.5,
    };
    const size = {};
    size.width = size.height = this.props.size - (style.margin * 2);
    const portrait_size = {};
    portrait_size.width = portrait_size.height = Math.ceil((size.width - (style.borderWidth * 2)) + 2);
    return (
      <TouchableHighlight underlayColor='transparent' onPress={this.props.onSelect} >
        <View style={[style_ids.circle, this.context.style, this.props.style, style, size]} >
          <Image source={this.props.image} style={[style_ids.portrait, portrait_size]} resizeMode='contain' />
        </View>
      </TouchableHighlight>
    );
  }
}

const style = {
  circle: {
    backgroundColor: "#000000",
  },
  portrait: {
    left: -1,
    top: -1,
  },
}
const style_ids = StyleSheet.create(style);
