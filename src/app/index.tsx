import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View style={style.container}>
      <Button title="Criar Conta" path="/signup" type="primary" />

      <Link
        style={{ color: "#000", paddingTop: 20 }}
        href={{ pathname: "/signup", params: { name: "Amorzão", id: 4 } }}
      >
        Params
      </Link>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
