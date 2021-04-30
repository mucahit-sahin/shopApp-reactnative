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
import {Alert, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ProductDetails = ({navigation, route}) => {
  const {data} = route.params;
  const [price, setPrice] = React.useState(data.price);
  const [stock, setStock] = React.useState(data.stock);
  const update = () => {
    if (price.trim() != '' && stock.trim() != '') {
      firestore()
        .collection('Products')
        .doc(data.key)
        .update({
          price: price,
          stock: stock,
        })
        .then(() => {
          console.log('Product updated!');
        });
    }
  };
  const deleteProduct = () => {
    Alert.alert('Delete Product', 'Are you sure?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('Products')
            .doc(data.key)
            .delete()
            .then(() => {
              console.log('Product deleted!');
              navigation.navigate('Home');
            });
        },
      },
    ]);
  };
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{data.name}</Title>
        </Body>
        <Right>
          <Button transparent rounded onPress={() => deleteProduct()}>
            <Icon name="remove" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Image
          style={{height: 200, width: '100%'}}
          source={{
            uri: data.image,
          }}
        />
        <Card>
          <CardItem header>
            <Left>
              <Text>{data.name}</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Category</Text>
            </Left>
            <Body>
              <Text>{data.category}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Item inlineLabel>
                <Label>Price</Label>
                <Input value={price} onChangeText={text => setPrice(text)} />
                <Label>Stock</Label>
                <Input value={stock} onChangeText={text => setStock(text)} />
              </Item>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Button full rounded info style={{margin: 10}} onPress={() => update()}>
        <Text>Update</Text>
      </Button>
    </Container>
  );
};

export default ProductDetails;
