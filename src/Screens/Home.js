import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Image,
  Input,
  Item,
  Left,
  Right,
  Text,
  Thumbnail,
  Title,
  View,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import ProductListItem from '../Components/ProductListItem';

const Home = () => {
  return (
    <Container>
      <Header searchBar style={{backgroundColor: '#62B1F6'}}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Button medium info full rounded style={{marginTop: 10}}>
        <Text>Ürün Ekle</Text>
      </Button>
      <Content>
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
      </Content>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
