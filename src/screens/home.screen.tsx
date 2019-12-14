import React from 'react';
import { View, Text, SafeAreaView, Button } from "react-native";
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<any>;
};


export default class HomeScreen extends React.Component<Props, any> {

  static navigationOptions = ({ navigation, navigationOptions }): NavigationStackOptions => {
    console.log(navigationOptions.headerStyle);
    return {
      title: '首页',
    };
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Text>
          运动日记
        </Text>

        <View>
          <Button title="开始训练" onPress={() => {
            this.props.navigation.navigate('VideoArrangeScreen')
          }}/>
        </View>

      </SafeAreaView>
    )
  }
};
