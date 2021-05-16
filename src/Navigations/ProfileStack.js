import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../Screens/Profile';
import Regions from '../Screens/Regions';

const Stack = createStackNavigator();

const ProfileStack = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Regions"
        component={Regions}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
