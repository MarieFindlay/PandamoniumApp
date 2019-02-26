import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import { Constants } from "expo";

import Card from "./Card";

import { backImages } from "./assets";

import { getRandomElement, createPandaArray, shufflePandas } from "./utils";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pandasToDisplay: createPandaArray(4, backImages)
    };
  }
  attemptMatch = id => {
    console.log(id);
  };
  render() {
    const pandas = this.state.pandasToDisplay;
    return (
      <>
        <FlatList
          contentContainerStyle={styles.container}
          data={pandas}
          renderItem={({ item }) => (
            <Card
              key={pandas.indexOf(item)}
              backImgId={item.id}
              backImg={item.path}
              attemptMatch={this.attemptMatch}
            />
          )}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.handlePress}
            style={styles.textBox}
          >
            <Text>End Game</Text>
          </TouchableOpacity>
        </View>
      </>
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
