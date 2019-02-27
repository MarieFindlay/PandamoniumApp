import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { pandaImage, backImages } from "./assets";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFrontIsDisplayed: false
    };
  }
  flipCard = () => {
    this.setState({
      cardFrontIsDisplayed: !this.state.cardFrontIsDisplayed
    });
  };
  componentDidMount = () => {
    setTimeout(this.flipCard, 5000);
  };
  handleOnPress = () => {
    this.flipCard();
    setTimeout(this.flipCard, 500);
    this.props.attemptMatch();
  };
  render() {
    const pandaImg = pandaImage;
    const { backImg, backImgId, hasMatched } = this.props;
    return (
      <TouchableOpacity
        style={!hasMatched ? styles.card : styles.cardMatched}
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
    width: 75,
    borderRadius: 5,
    margin: 5,
    padding: 6,
    backgroundColor: "#faf8ee"
  },
  cardMatched: {
    backgroundColor: "#EE6146"
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    marginLeft: 1.5
  }
});
