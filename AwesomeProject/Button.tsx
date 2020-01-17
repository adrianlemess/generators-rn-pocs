import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Button(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect3}>
        <Text style={styles.button}>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect3: {
    width: 328,
    height: 40,
    backgroundColor: "rgba(25,29,34,1)",
    elevation: 45,
    borderRadius: 100,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.25,
    shadowRadius: 15
  },
  button: {
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "encode-sans-600",
    marginTop: 14,
    marginLeft: 143
  }
});

export default Button;