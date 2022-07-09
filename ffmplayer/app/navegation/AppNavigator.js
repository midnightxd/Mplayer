import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import AudioList from '../pages/AudioList';
import Player from '../pages/Player';
import PlayList from '../pages/PlayList';
import Settings from '../pages/Settings';
import dark from '../theme/dark';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: dark.COLOR.BOTTOM_TAB_NAVIGATOR,
          borderWidth: 1,
          borderTopColor: dark.COLOR.APP_BG,
        },
      })}
    >
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          title: '',
          tabBarIcon: () => {
            return <Ionicons name="headset" size={25} color={dark.COLOR.DRAW_DETAILS} style={{ marginBottom: -15 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title: '',
          tabBarIcon: () => {
            return <FontAwesome5 name="compact-disc" size={25} color={dark.COLOR.DETAILS_ICONS} style={{ marginBottom: -10 }} />;
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          title: '',
          tabBarIcon: ({ size }) => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={25}
                color={dark.COLOR.DETAILS_ICONS}
                style={{ marginBottom: -10 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: '',
          tabBarIcon: () => {
            return <Feather name="settings" size={24} color={dark.COLOR.DETAILS_ICONS} style={{ marginBottom: -10 }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
