import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Constants } from "expo";

import Game from "./Game";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHasStarted: false,
      lastResult: null
    };
  }
  handleStartOrEndGame = result => {
    this.setState({ gameHasStarted: !this.state.gameHasStarted });
  };
  render() {
    if (!this.state.gameHasStarted) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handleStartOrEndGame}
            style={styles.textBox}
          >
            <Text>Start Game</Text>
          </TouchableOpacity>
        </View>
      );
    } else
      return (
        <>
          <Game handlePress={this.handleStartOrEndGame} />
          <Text>{this.state.lastResult}</Text>
        </>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#EE6146",
    alignItems: "center",
    justifyContent: "center"
  },
  textBox: {
    backgroundColor: "#faf8ee",
    padding: 10,
    borderRadius: 5
  }
});
