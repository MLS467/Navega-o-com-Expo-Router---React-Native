import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={style.container}>
      <Link href="/signup" style={style.new} asChild>
        <TouchableOpacity style={style.btn}>
          <Text style={style.text}>Criar Conta</Text>
        </TouchableOpacity>
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
  btn: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#090909",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  new: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Index;
