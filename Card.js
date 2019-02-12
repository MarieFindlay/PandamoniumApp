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

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFrontIsDisplayed: true
    };
  }
  render() {
    return <TouchableOpacity style={styles.image} />;
  }
}

const styles = StyleSheet.create({
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
