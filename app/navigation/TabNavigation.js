import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Fav from "../screens/Fav";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import { Feather, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from "@expo/vector-icons";

import { FONTS, SIZES, COLORS } from "../constant";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: SIZES.tabHeight,
          backgroundColor: COLORS.white,
          elevation: Platform.OS === "android" ? 0 : undefined,
          shadowOpacity: Platform.OS === "ios" ? 0 : undefined,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: SIZES.base,
              }}
            >
              <Feather
                name="home"
                size={24}
                style={{ color: focused ? COLORS.primary : COLORS.accent2 }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: focused ? COLORS.primary : COLORS.accent2,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: SIZES.base,
              }}
            >
              <Feather
                name="search"
                size={24}
                style={{ color: focused ? COLORS.primary : COLORS.accent2 }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: focused ? COLORS.primary : COLORS.accent2,
                }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: SIZES.base,
              }}
            >
              <MaterialIcons
                name="favorite-border"
                size={24}
                style={{ color: focused ? COLORS.primary : COLORS.accent2 }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: focused ? COLORS.primary : COLORS.accent2,
                }}
              >
                Fav
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: SIZES.base,
              }}
            >
              <Ionicons
                name="person"
                size={24}
                style={{ color: focused ? COLORS.primary : COLORS.accent2 }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: focused ? COLORS.primary : COLORS.accent2,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
