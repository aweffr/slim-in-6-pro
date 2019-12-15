/**
 * 编排视频
 */

import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { NavigationStackOptions } from "react-navigation-stack";

type Navi = NavigationStackProp<any>;

type Prop = {
  navigation: Navi
}

export default class VideoArrangeScreen extends React.Component<Prop, any> {

  static navigationOptions = (props: { navigation: Navi }): NavigationStackOptions => {
    return {
      title: props.navigation.getParam('title')
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>视频编排</Text>
        <Button title="Change Title" onPress={() => {
          this.props.navigation.setParams({ 'title': '123' })
        }}/>
        <Button title="Go!" onPress={() => {
          this.props.navigation.navigate('VideoPlayScreen');
        }}/>
      </SafeAreaView>
    );
  }
}
