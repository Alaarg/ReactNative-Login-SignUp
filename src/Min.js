import React, { Component } from "react";
import { Text, View } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";
import HomePage from "./HomeSingle";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  HomePage: { screen: HomePage }
});

const App = createAppContainer(MainNavigator);

export default App;
