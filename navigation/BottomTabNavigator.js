import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import DiseaseListScreen from '../screens/DiseaseListScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function CustomerBottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Home' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-home' />
          )
        }}
      />

      <BottomTab.Screen
        name='Diseases'
        component={DiseaseListScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Plant diseases' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-leaf' />
          )
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name='Profile' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-person' />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'Diseases':
      return '';
    case 'Profile':
      return '';
  }
}
