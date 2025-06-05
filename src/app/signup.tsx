import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/Button";

const Signup = () => {
  return (
    <View style={style.container}>
      <Button title="Voltar" path="/" type="secondary" />
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
