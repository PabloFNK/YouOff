import React from "react";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "./components/TabNavigator";

export default class App extends React.Component {
  state = {
    isReady: false
  };

  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return <TabNavigator />;
  }
}
