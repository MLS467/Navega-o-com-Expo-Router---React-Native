import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Id = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 50 }}>Product ID: {id}</Text>
    </View>
  );
};

export default Id;
