import {Body, Card, CardItem, Left, Right, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const OrdersItem = ({username, neighborhood, address, price, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
      <Card>
        <CardItem>
          <Left>
            <Text>{username}</Text>
          </Left>
          <Body style={{display: 'flex', justifyContent: 'center'}}>
            <Text>{neighborhood}</Text>
            <Text note>{address}</Text>
          </Body>
          <Right>
            <Text>{price} TL</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default OrdersItem;
