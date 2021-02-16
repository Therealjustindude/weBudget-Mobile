import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Expenses from './src/screens/Expenses';
import Debts from './src/screens/Debts';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Expenses" component={Expenses} />
          <Tab.Screen name="Debts" component={Debts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


