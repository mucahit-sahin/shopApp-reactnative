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
import {StyleSheet} from 'react-native';

const Orders = () => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left></Left>
        <Body>
          <Title>Orders</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content />
    </Container>
  );
};

export default Orders;

const styles = StyleSheet.create({});
