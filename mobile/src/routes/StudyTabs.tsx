import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#FAFAFC',
      activeBackgroundColor: '#EBEBF5',
      inactiveTintColor: "#C1BCCC",
      activeTintColor: "#32264D"
    }}
  >
    <Screen
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name="ios-easel" color={focused ? "#8257E5" : color} size={size} />
        )
      }}
      name="TeacherList"
      component={TeacherList}
    />
    <Screen
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name="ios-heart" color={focused ? "#8257E5" : color} size={size} />
        )
      }}
      name="Favorites"
      component={Favorites}
    />
  </Navigator>
)

export default StudyTabs;