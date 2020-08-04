import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={3}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
