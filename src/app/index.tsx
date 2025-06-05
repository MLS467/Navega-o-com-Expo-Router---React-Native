import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const Index = () => {
  const handleRouter = () => {
    router.navigate("/signup");
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.btn} onPress={handleRouter}>
        <Text style={style.text}>Criar Conta</Text>
      </TouchableOpacity>
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
