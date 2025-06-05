import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const LayoutRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#e91e63",
          drawerInactiveTintColor: "#000",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "SignIn",
            drawerLabel: "Home",
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="SignUp"
          options={{
            title: "SignUp",
            drawerLabel: "Home",
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default LayoutRoot;
