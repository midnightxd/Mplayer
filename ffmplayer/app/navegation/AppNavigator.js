import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import AudioList from '../pages/AudioList';
import PlayList from '../pages/PlayList';
import Settings from '../pages/Settings';
import Player from '../pages/Player';
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
          title: 'Audio',
          tabBarIcon: () => {
            return <Ionicons name="headset" size={25} color={dark.COLOR.DRAW_DETAILS} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title: 'Player',
          tabBarIcon: () => {
            return <FontAwesome5 name="compact-disc" size={25} color={dark.COLOR.DAW_OPACITY} />;
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          title: 'PlayList',
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="playlist-music" size={24} color={dark.COLOR.DAW_OPACITY} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: () => {
            return <Feather name="settings" size={24} color={dark.COLOR.DAW_OPACITY} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
