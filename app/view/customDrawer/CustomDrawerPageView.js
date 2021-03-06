import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppStackManager from '../../navigate/AppStackManager';

export default class CustomDrawerPageView extends Component {
  constructor(props) {
    super(props);
  }
  _openAlonePage() {
    AppStackManager.goAbout(this.props.navigation);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.launchImage}
          source={require('../../img/launch.png')}
        />
        <Text>CustomDrawerPageView</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchImage: {
    resizeMode: 'contain',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
});
