import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Signup = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Signup</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});

export default Signup;
