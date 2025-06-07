import { Button } from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";

const Products = () => {
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Products Screen</Text>
      <Button title="Rolex" path="product/47" />
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

export default Products;
