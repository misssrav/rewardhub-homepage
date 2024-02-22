import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image
        source={require("./../../../assets/images/logo-color.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, textAlign: "center" }}>
          {" "}
          Welcome to <Text style={{ fontWeight: "bold" }}>RewardHub</Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("button is clicked")}
        >
          {" "}
          <Text style={{ textAlign: "center", fontSize: 17 }}>
            lets Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 450,
    height: 450,
    marginTop: 0,
    borderWidth: 4,
    borderColor: "#0000",
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    height: "70%",
    marginTop: -10,
    borderWidth: 4,
    backgroundColor: "#b8860b",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginTop: 40,
    borderRadius: 99,
  },
});
