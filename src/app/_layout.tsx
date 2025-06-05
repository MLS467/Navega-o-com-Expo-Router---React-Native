import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const LayoutRoot = () => {
  return (
    <>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <Slot />
      </View>
      <View style={styles.footer}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 70,
    backgroundColor: "#000",
  },
  footer: {
    padding: 30,
    backgroundColor: "#ccc",
  },
});

export default LayoutRoot;
