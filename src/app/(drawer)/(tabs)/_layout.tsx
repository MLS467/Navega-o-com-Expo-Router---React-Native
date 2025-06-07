import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          tabBarButton: () => null, // Esconder o botão de navegação
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
