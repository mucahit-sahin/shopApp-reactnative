import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetails from '../Screens/ProductDetails';
import Home from '../Screens/Home';
import CreateProduct from '../Screens/CreateProduct';

const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
