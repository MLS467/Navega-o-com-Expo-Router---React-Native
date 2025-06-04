import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
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
});

export default Index;
