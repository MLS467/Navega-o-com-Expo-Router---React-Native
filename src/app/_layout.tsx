import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const LayoutRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
};
export default LayoutRoot;
