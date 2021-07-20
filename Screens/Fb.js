/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Fb = (props) => {
  return (
    <View style={styles.container}>
      <Text>"FaceBook Page"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Fb;
