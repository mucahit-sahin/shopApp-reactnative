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
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import OrdersItem from '../Components/OrdersItem';
import Loading from '../Components/Loading';

const Orders = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    firestore()
      .collection('Orders')
      .where('shop', '==', user.email)
      .onSnapshot(querySnapshot => {
        setOrders([]);
        querySnapshot.forEach(doc => {
          firestore()
            .collection('Users')
            .doc(doc.data().user)
            .get()
            .then(data => {
              setOrders(orders => [
                ...orders,
                {...doc.data(), ...data.data(), orderId: doc.id},
              ]);
            });
        });
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left></Left>
        <Body>
          <Title>Siparişler</Title>
        </Body>
        <Right></Right>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {orders.map(order => (
            <OrdersItem
              key={order.orderId}
              order={order}
              navigation={navigation}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Orders;
