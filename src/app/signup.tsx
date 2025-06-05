import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Signup = () => {
  return (
    <View style={style.container}>
      <Link href="/" style={style.back}>
        Voltar
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
  back: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});

export default Signup;
