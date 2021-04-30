import React from 'react';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Input,
  Item,
  Text,
} from 'native-base';
import {View} from 'react-native';

const ProductList = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Product List</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <View rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default ProductList;
