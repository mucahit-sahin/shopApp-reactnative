import {Body, Card, CardItem, Left, Right, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const OrdersItem = ({order, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', {order})}>
      <Card>
        <CardItem>
          <Left>
            <Text>{order.fullName}</Text>
          </Left>
          <Body style={{display: 'flex', justifyContent: 'center'}}>
            <Text style={{fontSize: 13}}>{order.district}</Text>
            <Text note style={{fontSize: 11}}>
              {order.town}/{order.city}
            </Text>
          </Body>
          <Right>
            <Text> {order.totalPrice}TL</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default OrdersItem;
