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
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import OrderStatus from '../Components/OrderStatus';

const OrderDetails = ({navigation, route}) => {
  const {order} = route.params;
  const nextOrderStatus = () => {
    Alert.alert('Uyari', 'Emin misin?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          firestore()
            .collection('Orders')
            .doc(order.orderId)
            .update({
              orderStatus: order.orderStatus + 1,
            })
            .then(() => {
              navigation.goBack();
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
          <Title>Sipariş Detayları</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <View>
          <Item fixedLabel style={{padding: 5}}>
            <Label>Adı ve Soyadı</Label>
            <Input disabled value={order.fullName} />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>İl</Label>
            <Input disabled value={order.city} />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>İlçe</Label>
            <Input disabled value={order.town} />
          </Item>
          <Item fixedLabel style={{padding: 5}}>
            <Label>Adres</Label>
            <Input
              disabled
              value={order.district + ' ' + order.address}
              multiline
              numberOfLines={3}
            />
          </Item>
          <OrderStatus position={order.orderStatus - 1} />
        </View>
      </Content>
      <View style={{marginBottom: 10}}>
        <Button
          full
          rounded
          style={{backgroundColor: '#62B1F6', margin: 5}}
          onPress={() =>
            navigation.navigate('ProductList', {products: order.cart})
          }>
          <Text>Ürün Listesi</Text>
        </Button>
        {order.orderStatus < 4 && (
          <Button
            full
            rounded
            style={{backgroundColor: '#62B1F6', margin: 5}}
            onPress={() => nextOrderStatus()}>
            <Text>Sipariş Durumunu Degiştir</Text>
          </Button>
        )}
      </View>
    </Container>
  );
};

export default OrderDetails;
