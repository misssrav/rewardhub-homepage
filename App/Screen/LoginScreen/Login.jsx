import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();

  //client IDs from .env
  const config = {
    androidClientId:
      "1069193905348-cs93min8q7k4g4rfe6b0h9flee4gkt8s.apps.googleusercontent.com",
    webClientId:
      "1069193905348-jtg47du5saop7n98st0g1ps4hcp7vqr8.apps.googleusercontent.com",
    // iosClientId: IOS_CLIENT_ID,
    // webClientId: WEB_CLIENT_ID,expoClientId
  };
  const [request, response, promptAsync] = Google.useAuthRequest(config);

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

        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          {" "}
          <Text style={{ textAlign: "center", fontSize: 17 }}>
            SignIn/Signup
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
    borderWidth: 4,
    borderColor: "#0000",
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    height: "70%",
    marginTop: -25,
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
