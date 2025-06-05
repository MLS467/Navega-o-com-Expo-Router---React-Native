import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const LayoutRoot = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false, // serve para esconder o nome do tab
        // tabBarInactiveTintColor: "#888", // cor do ícone quando não está ativo
        // tabBarActiveIntColor: "#000", // cor do ícone quando está ativo
        tabBarLabelPosition: "beside-icon", // altera o posicionamento do texto dos ícones na tab
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "SignIn",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="house" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "SignUp",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default LayoutRoot;
