import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { FONTS, SIZES, COLORS } from "../constant";
import GoogleMapView from "../components/GoogleMapView";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: SIZES.button,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
      }}
    >
      <Header />
      <GoogleMapView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
