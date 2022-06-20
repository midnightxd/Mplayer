import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import AudioList from "../screens/AudioList/index";
import Player from "../screens/Player/index";
import PlayList from "../screens/PlayList";
import color from "../misc/color";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.APP_BG,
          borderWidth: 1,
          borderTopColor: color.APP_BG,
        },
      })}
    >
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="headset" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="play" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          title: "",
          tabBarIcon: ({ size }) => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={size}
                color={color.DETAILS_ICONS}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
