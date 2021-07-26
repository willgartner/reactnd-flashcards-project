import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import DeckList from "../screens/DeckListScreen";
import DeckScreen from "../screens/DeckScreen";
import NewCardScreen from "../screens/NewCardScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import QuizScreen from "../screens/QuizScreen";
import ResetDeckScreen from "../screens/ResetDeckScreen";
import Colors from "../utils/Colors";
import DeckListScreen from "../screens/DeckListScreen";

const FlashCardsTabsNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: DeckListScreen,
        navigationOptions: {
        headerTitle: "Flash Cards",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="home-outline" size={25} color={tabInfo.tintColor} />
            );
          },
        },
      },
      NewDeck: {
        screen: NewDeckScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="add-outline" size={25} color={tabInfo.tintColor} />
            );
          },
          tabBarLabel: "New Deck",
        },
      },
      Reset: {
        screen: ResetDeckScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="alert-outline"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          },
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
          fontSize: 12,
        },
      },
    }
  );

const FlashCardsStackNavigator = createStackNavigator(
  {
    DeckList: {screen: FlashCardsTabsNavigator, navigationOptions: {
        headerTitle: "Flash Cards",
    }},
    Deck: {screen: DeckScreen,navigationOptions: {
        headerTitle: "Flash Cards",
    }},
    NewCard: NewCardScreen,
    Quiz: QuizScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: Colors.lightColor,
      },
      headerTintColor: Colors.lightColor,
    },
  }
);

export default createAppContainer(FlashCardsStackNavigator);
