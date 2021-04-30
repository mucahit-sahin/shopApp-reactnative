import {
  Button,
  Container,
  Content,
  Fab,
  Header,
  Icon,
  Input,
  Item,
  Text,
} from 'native-base';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

import ProductListItem from '../Components/ProductListItem';
import Loading from '../Components/Loading';
import {getStorage} from '../Utils/firebase';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState();
  React.useEffect(() => {
    if (!user) return;
    setLoading(true);
    const subscriber = firestore()
      .collection('Products')
      .where('id', '==', user.email)
      .onSnapshot(querySnapshot => {
        setProducts([]);
        querySnapshot.forEach(documentSnapshot => {
          getStorage('products/' + documentSnapshot.id).then(url => {
            setProducts(products => [
              ...products,
              {
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
                image: url,
              },
            ]);
          });
        });

        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [user]);
  return (
    <Container>
      <Header searchBar style={{backgroundColor: '#62B1F6'}}>
        <Item rounded>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {products.map(product => (
            <ProductListItem
              key={product.name}
              navigation={navigation}
              product={product}
            />
          ))}
        </Content>
      )}
      <Fab
        active={true}
        direction="up"
        style={{backgroundColor: '#62B1F6'}}
        position="bottomRight"
        onPress={() => navigation.navigate('CreateProduct')}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
};

export default Home;
