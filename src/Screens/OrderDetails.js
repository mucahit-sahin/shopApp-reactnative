import React from 'react';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  View,
  Text,
  Item,
  Label,
  Input,
  Button,
  Icon,
} from 'native-base';

const OrderDetails = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Order Details</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <View>
          <Item fixedLabel style={{padding: 5}}>
            <Label>Display Name</Label>
            <Input disabled value="Mucahit Şahin" />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>City</Label>
            <Input disabled value="İstanbul" />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>Town</Label>
            <Input disabled value="Arnavutköy" />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>Address</Label>
            <Input
              disabled
              value="Cemre mahallesi, Çimen sokak, No:5, D:2"
              multiline
              numberOfLines={4}
            />
          </Item>
        </View>
      </Content>
      <View style={{marginBottom: 10}}>
        <Button
          full
          rounded
          style={{backgroundColor: '#62B1F6', margin: 5}}
          onPress={() => navigation.navigate('ProductList')}>
          <Text>Product List</Text>
        </Button>
        <Button full rounded style={{backgroundColor: '#62B1F6', margin: 5}}>
          <Text>Update Order Status</Text>
        </Button>
      </View>
    </Container>
  );
};

export default OrderDetails;
