import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <Redirect href="/" />;
  }

  return (
    <View
      style={StyleSheet.flatten({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Text> Maisson - {id}</Text>
    </View>
  );
};

export default Home;
