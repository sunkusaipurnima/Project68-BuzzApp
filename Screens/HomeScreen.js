/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Fb from "./Fb";
import Insta from "./Insta";

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="facebook" component={Fb} />

        <Tab.Screen name="Instagram" component={Insta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
