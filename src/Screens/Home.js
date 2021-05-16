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
import {getStorage} from '../Utils/firebase';
import {useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [products, setProducts] = React.useState([]);
  const [filterList, setFilterList] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(() => {
    onRefresh();
  }, []);
  const onRefresh = () => {
    setRefreshing(true);
    firestore()
      .collection('Products')
      .where('id', '==', user.email)
      .get()
      .then(querySnapshot => {
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
          setFilterList(products);
          setRefreshing(false);
        });
      });
  };
  const filterProducts = text => {
    let pattern = new RegExp(text);
    let filterList = products.filter(function (repo) {
      return repo.name.match(pattern);
    });
    setFilterList(filterList);
  };
  return (
    <Container>
      <Header searchBar style={{backgroundColor: '#62B1F6'}}>
        <Item rounded>
          <Icon name="ios-search" />
          <Input
            placeholder="Ara"
            onChangeText={text => filterProducts(text)}
          />
        </Item>
      </Header>
      <Content
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {filterList.map(product => (
          <ProductListItem
            key={product.key}
            navigation={navigation}
            product={product}
          />
        ))}
      </Content>
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
