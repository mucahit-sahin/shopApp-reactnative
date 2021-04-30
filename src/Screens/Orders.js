import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';
import React from 'react';
import OrdersItem from '../Components/OrdersItem';

const Orders = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left></Left>
        <Body>
          <Title>Orders</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <OrdersItem
          username="Mücahit Mustafa Perver"
          neighborhood="Anadolu mah"
          address="nokta sokak no:2 d:5"
          price={105}
          navigation={navigation}
        />
        <OrdersItem
          username="Mücahit Şahin"
          neighborhood="Anadolu mah"
          address="nokta sokak no:2 d:5"
          price={94}
          navigation={navigation}
        />
        <OrdersItem
          username="Yasin Doğru"
          neighborhood="Anadolu mah"
          address="nokta sokak no:2 d:5"
          price={58}
          navigation={navigation}
        />
      </Content>
    </Container>
  );
};

export default Orders;
