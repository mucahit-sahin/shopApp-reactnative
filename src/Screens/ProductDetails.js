import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import React from 'react';
import {Image} from 'react-native';

const ProductDetails = ({navigation, route}) => {
  const [product, setProduct] = React.useState({});
  const {data} = route.params;
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{data.productName}</Title>
        </Body>
        <Right>
          <Button danger rounded onPress={() => addProduct()}>
            <Icon name="remove" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Image
          style={{height: 200, width: '100%'}}
          source={{
            uri: data.productImage,
          }}
        />
        <Card>
          <CardItem header>
            <Left>
              <Text>{data.productName}</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Category</Text>
            </Left>
            <Body>
              <Text>{data.productCategory}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Item inlineLabel>
                <Label>Fiyat</Label>
                <Input value="30" />
                <Label>Stok</Label>
                <Input value="30" />
              </Item>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Button full rounded info style={{marginBottom: 10}}>
        <Text>Güncelle</Text>
      </Button>
    </Container>
  );
};

export default ProductDetails;
