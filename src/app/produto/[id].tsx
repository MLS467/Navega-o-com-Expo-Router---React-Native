import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Id = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Produto ID {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Id;
