import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";

import { FONTS, SIZES, COLORS } from "../constant";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: SIZES.radius,
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image
        source={require("../../assets/user.png")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: SIZES.profile,
    height: SIZES.profile,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
    paddingLeft: 10,
    width: SIZES.wp(60),
    borderColor: COLORS.primary,
    ...FONTS.body1
  },
  userImage: {
    width: SIZES.profile,
    height: SIZES.profile,
    borderRadius: SIZES.profile,
  },
});
