import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { assetsObject } from "./assets";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFrontIsDisplayed: true
    };
  }
  flipCard = () => {
    this.setState({
      cardFrontIsDisplayed: !this.state.cardFrontIsDisplayed
    });
  };
  handleOnPress = () => {
    this.flipCard();
    setTimeout(this.flipCard, 500);
  };
  render() {
    const pandaImg = assetsObject.pandaImg;
    const { backImg } = this.props;
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={this.handleOnPress}
      >
        {this.state.cardFrontIsDisplayed ? (
          <Image style={styles.image} source={pandaImg} />
        ) : (
          <Image style={styles.image} source={backImg} />
        )}
      </TouchableOpacity>
    );
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
