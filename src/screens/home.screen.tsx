import React from 'react';
import { View, Text, SafeAreaView, Button, BackHandler, Alert } from "react-native";
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import bind from "../utils/bind";
import { dateNow } from "../utils/date";

type Props = {
  navigation: NavigationStackProp<any>;
};


export default class HomeScreen extends React.Component<Props, any> {

  static navigationOptions = ({ navigation, navigationOptions }): NavigationStackOptions => {
    return {
      title: '首页',
    };
  };

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  @bind
  backHandler() {
    if (!this.props.navigation.isFocused()) {
      return false;
    } else {
      Alert.alert('退出', '是否退出应用', [{
        text: '取消',
        onPress: () => null,
      }, {
        text: '确定',
        onPress: () => {
          BackHandler.exitApp();
        },
      }]);
      return true;
    }

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Text>{dateNow()}</Text>

        <Button title="顾颖牛逼" onPress={() => {
          console.log('打印: 顾颖牛逼')
        }}/>

        <View>
          <Button title="开始训练" onPress={() => {
            this.props.navigation.navigate('VideoArrangeScreen')
          }}/>
        </View>

      </SafeAreaView>
    )
  }
};
