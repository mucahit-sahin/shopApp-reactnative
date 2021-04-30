import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Orders"
          component={OrderStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="th-large" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
