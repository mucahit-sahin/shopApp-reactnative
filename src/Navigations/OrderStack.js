import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderDetails from '../Screens/OrderDetails';
import Orders from '../Screens/Orders';
import ProductList from '../Screens/ProductList';

const Stack = createStackNavigator();

const OrderStack = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
