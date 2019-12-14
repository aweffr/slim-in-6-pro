import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/home.screen";
import VideoArrangeScreen from "./src/screens/video-arrange.screen";
import VideoPlayScreen from "./src/screens/video-play.screen";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  VideoArrangeScreen: {
    screen: VideoArrangeScreen,
  },
  VideoPlayScreen: {
    screen: VideoPlayScreen,
  },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
  }
});


export default createAppContainer(AppNavigator);
