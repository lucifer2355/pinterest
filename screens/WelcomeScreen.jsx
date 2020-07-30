import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title='login' onPress={() => console.log("login button")} />
        <AppButton title='register' color='secondary' />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
