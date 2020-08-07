import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lading from '../pages/Lading';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Landing" component={Lading} />
      <Screen name="give-classes" component={GiveClasses} />
      <Screen name="study" component={StudyTabs} />
    </Navigator>
  </NavigationContainer>
)

export default AppStack;