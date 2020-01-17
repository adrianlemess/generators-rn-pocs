import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Input(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.inputLabel}>Input label</Text>
      <Text style={styles.content}>Content</Text>
      <Svg viewBox="0 0 1001 1" style={styles.path}>
        <Path
          strokeWidth={1}
          stroke="rgba(230, 230, 230,0.33)"
          d="M0.00 0.00 L1001.00 0.00 L1001.00 1.00 L0.00 0.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputLabel: {
    color: "rgba(255,255,255,1)",
    opacity: 0.33,
    fontSize: 11,
    fontFamily: "encode-sans-regular"
  },
  content: {
    color: "rgba(255,255,255,1)",
    opacity: 0.87,
    fontSize: 16,
    fontFamily: "encode-sans-regular",
    marginTop: 5
  },
  path: {
    width: 296,
    height: 1,
    marginTop: 8
  }
});

export default Input;
