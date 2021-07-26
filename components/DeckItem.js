import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const DeckItem = (props) => {
  const title = props.deck.title;
  const cardCount = props.deck.questions.length;
  return (
    <View style={styles.listItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{cardCount} Cards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.lightColor
  },
  detail: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
    textAlign: 'center',
    color: Colors.darkColor
  }

});

export default DeckItem;
