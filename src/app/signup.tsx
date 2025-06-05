import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Alert } from "react-native";
const Signup = () => {
  const backToHome = () => {
    if (!router.canGoBack())
      return Alert.alert(
        "Erro",
        "Não é possível voltar para a página inicial."
      );
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
