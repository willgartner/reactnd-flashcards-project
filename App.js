import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as Notifications from 'expo-notifications';
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { getDecks, saveDecks, resetDecks, sendNotification } from "./utils/Api";
import DeckData from "./models/deckData";
import CardData from "./models/cardData";
import FlashCardsNavigator from "./navigation/FlashCardsNavigation";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = (props) => {
  const [deckList, setDeckList] = useState([]);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    sendNotification();
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "Study Time",
    //     body: "Don't forget to study your flashcards!"
    //   },
    //   trigger: {
    //     seconds: 30
    //   }
    // })
    const loadDecks = async () => {
      const decks = await getDecks();
      setDeckList(decks);
    };
    loadDecks();
  }, []);

  const addCardHandler = (q, a, id) => {
    const newQuestion = new CardData(q, a);
    setDeckList((deck) => {
      let cards = [...deck]
      const index = deck.findIndex((item) => item.id === id)
      const card = {...cards[index], questions: cards[index].questions.concat(newQuestion)}
      cards[index] = card;
      saveDecks(cards);
      return cards;
    });
  };

  const addDeckHandler = (name) => {
    const newDeck = new DeckData(name);
    setDeckList((deck) => {
      const decks = deck.concat([newDeck]);
      saveDecks(decks);
      return decks;
    });

    return newDeck.id;
  };

  const deleteDeckHandler = (id) => {
    setDeckList((deck) => {
      const decks = deck.filter((item) => item.id !== id)
      const save = async () => {
        await saveDecks(decks)};
      save();
      return decks
    })
  };

  const resetDeckHandler = (id) => {
    const reset = async () => {
      await resetDecks();
      setDeckList([]);
    };
    reset();
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.warn}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <FlashCardsNavigator
      screenProps={{
        deckList,
        addCardHandler,
        addDeckHandler,
        deleteDeckHandler,
        resetDeckHandler,
      }}
    />
  );
};

export default App;
