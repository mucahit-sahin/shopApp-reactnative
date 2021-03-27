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
import {StyleSheet} from 'react-native';
import ProductListItem from '../Components/ProductListItem';

const Home = ({navigation}) => {
  const [fabActive, setFabActive] = React.useState(false);
  return (
    <Container>
      <Header searchBar style={{backgroundColor: '#62B1F6'}}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
        <ProductListItem
          navigation={navigation}
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          navigation={navigation}
          productName="Ülker Çikolata"
          productCategory="Tatlı"
          productPrice={1.25}
          productImage="https://cdnprod.mopas.com.tr/sys-master-mopascdncontainer/hca/h46/8870521733150/61162_0_521Wx521H"
        />
        <ProductListItem
          navigation={navigation}
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          navigation={navigation}
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          navigation={navigation}
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
        <ProductListItem
          navigation={navigation}
          productName="Ekmek"
          productCategory="Un Mamulleri"
          productPrice={1.25}
          productImage="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
        />
      </Content>
      <Fab
        active={true}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('CreateProduct')}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
};

export default Home;
