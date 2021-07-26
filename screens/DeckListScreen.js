import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getDecks, saveDecks, resetDecks } from "../utils/Api";
import DeckItem from "../components/DeckItem";
import Colors from "../utils/Colors";

const DeckListScreen = (props) => {
  const [showText, setShowText] = useState(false);
  const deckList = props.screenProps.deckList;

  useEffect(() => {
    deckList.length < 1 ? setShowText(true) : setShowText(false)
  });

  const renderDeck = (itemData) => {
    return (
      <View>
        <DeckItem
          deck={itemData.item}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "Deck",
              params: {
                deckId: itemData.item.id,
              },
            });
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={showText ? { display: 'flex'} : { display: 'none'}}>
        <Text style={styles.welcomeText}>Create a new Deck to begin!</Text>
      </View>
      <FlatList data={deckList} renderItem={renderDeck} />
    </View>
  );
};

DeckListScreen.navigationOptions = {
  headerTitle: "Flash Cards",
};

const styles = {
  welcomeText: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    textAlign: "center",
    color: Colors.primaryColor,
    marginVertical: 75
  },
};

export default DeckListScreen;
