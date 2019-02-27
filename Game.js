import React from "react";

import uuidv4 from "uuid/v4";

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
      pandasToDisplay: createPandaArray(4, backImages),
      lastTappedPanda: null,
      matchedPandaKeys: []
    };
  }
  attemptMatch = (currentIconId, currentKey) => {
    const lastTappedPanda = this.state.lastTappedPanda;
    if (lastTappedPanda === null) {
      this.setState({
        lastTappedPanda: {
          iconId: currentIconId,
          key: currentKey
        }
      });
    } else {
      if (
        lastTappedPanda.iconId === currentIconId &&
        lastTappedPanda.key !== currentKey
      ) {
        const newMatchedPandas = this.state.matchedPandaKeys;
        newMatchedPandas.push(currentKey, lastTappedPanda.key);
        this.setState({
          matchedPandaKeys: newMatchedPandas,
          lastTappedPanda: null
        });
      } else {
        this.setState({
          lastTappedPanda: {
            iconId: currentIconId,
            key: currentKey
          }
        });
      }
    }
  };
  render() {
    const pandas = this.state.pandasToDisplay;
    const matchedPandaKeys = this.state.matchedPandaKeys;
    return (
      <>
        <FlatList
          contentContainerStyle={styles.container}
          data={pandas}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              backImgId={item.id}
              backImg={item.path}
              attemptMatch={() => this.attemptMatch(item.id, index)}
              matchedPandaKeys={matchedPandaKeys}
              uniqueId={index}
            />
          )}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.handlePress}
            style={styles.textBox}
          >
            <Text style={styles.textBox}>End Game</Text>
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
  },
  textBox: {
    backgroundColor: "#faf8ee",
    padding: 5,
    borderRadius: 5
  }
});
