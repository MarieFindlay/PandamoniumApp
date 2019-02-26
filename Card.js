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
  handleOnPress = id => {
    this.flipCard();
    setTimeout(this.flipCard, 500);
    this.props.attemptMatch(id);
  };
  render() {
    const pandaImg = pandaImage;
    const { backImg, backImgId } = this.props;
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={this.handleOnPress(backImgId)}
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
  image: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    marginLeft: 1.5
  }
});
