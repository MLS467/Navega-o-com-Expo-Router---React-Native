import { StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";

const Index = () => {
  return (
    <View style={style.container}>
      <Button title="Entrar" path="/(drawer)" type="primary" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    gap: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  containerButton: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
});

export default Index;
