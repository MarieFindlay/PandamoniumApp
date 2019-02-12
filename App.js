import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Constants } from "expo";
import { black } from "ansi-colors";

import Card from "./Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pandaImg = "./../pandas_app/assets/pandaIcon.png";
    const iceCreamImg = "./../pandas_app/assets/iceCreamIcon.png";
    return (
      <View style={styles.container}>
        <Card />
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0}
          onPress={() =>
            this.setState({
              cardFrontIsDisplayed: !this.state.cardFrontIsDisplayed
            })
          }
        >
          {this.state.cardFrontIsDisplayed ? (
            <Image style={styles.image} source={require(pandaImg)} />
          ) : (
            <Image style={styles.image} source={require(iceCreamImg)} />
          )}
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
            <Image style={styles.image} source={require(pandaImg)} />
          </View>
        </TouchableWithoutFeedback>
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
  },
  card: {
    borderRadius: 5,
    margin: 5,
    padding: 6,
    backgroundColor: "#faf8ee"
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    marginLeft: 1.5
  }
});
