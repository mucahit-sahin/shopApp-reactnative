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
import {Image} from 'react-native';

const ProductList = ({navigation, route}) => {
  const {products} = route.params;
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Ürün Listesi</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        {products.map(product => (
          <Item style={{padding: 10}}>
            <Left>
              <Image
                source={{
                  uri: product.image,
                }}
                style={{width: 50, height: 50}}
              />
            </Left>
            <Body>
              <Text>{product.name}</Text>
            </Body>
            <Right>
              <Text>{product.price + 'x' + product.quantity}</Text>
            </Right>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

export default ProductList;
