import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
const Index = () => {
  return (
    <View style={style.container}>
      <View style={style.containerButton}>
        <DrawerToggleButton tintColor="#f00" />
      </View>

      <Button title="Criar Conta" path="/signup" type="primary" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  containerButton: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
});

export default Index;
