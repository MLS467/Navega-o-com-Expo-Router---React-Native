import { router } from "expo-router";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  path: any;
  type?: "primary" | "secondary";
};

export const Button = ({ title, path, type, ...rest }: Props) => {
  const handleRouter = () => {
    router.navigate(path);
  };

  const backToHome = () => {
    if (!router.canGoBack())
      return Alert.alert(
        "Erro",
        "Não é possível voltar para a página inicial."
      );
    router.back();
  };

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={type === "secondary" ? backToHome : handleRouter}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
