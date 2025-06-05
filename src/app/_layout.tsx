import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const LayoutRoot = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "BATATA" }} />
    </Stack>
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
