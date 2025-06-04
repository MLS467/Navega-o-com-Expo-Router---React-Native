import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Entrar</Text>
      {/* Link é utilizado para navegação entre telas */}
      <Link href="/signup" style={style.new}>
        ir para Signup
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  new: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Index;
