import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import tw from 'tailwind-rn';
import {Book, Books} from 'containers';

export type IRootStackParams = {
  Home: undefined;
  Book: {title: string};
};

let RootStack = createStackNavigator<IRootStackParams>();

export const Routes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: [tw('bg-gray-200')],
      }}>
      <RootStack.Screen
        name="Home"
        component={Books}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="Book" component={Book} />
    </RootStack.Navigator>
  );
};
