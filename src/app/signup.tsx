import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/Button";
import { useLocalSearchParams } from "expo-router/build/hooks";

const Signup = () => {
  const { name, id } = useLocalSearchParams();

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {`Nome: ${name} - ID: ${id}`}
      </Text>
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
