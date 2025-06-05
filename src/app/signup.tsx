import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
const Signup = () => {
  const backToHome = () => {
    router.back();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={backToHome}>
        <Text>Voltar</Text>
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
  back: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});

export default Signup;
