import React from "react";
import { Text, View } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import SearchPage from "./Search";

class ListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default class TabsExample extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Search">
            <SearchPage />
          </Tab>
          <Tab heading="List">
            <ListScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
