import React from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "expo";

import Card from "./Card";

import { assetsObject } from "./assets";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pandaImg = assetsObject.pandaImg;
    const iceCreamImg = assetsObject.iceCreamImg;
    return (
      <View style={styles.container}>
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
        <Card backImg={iceCreamImg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#EE6146",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  }
});
