import React from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Right,
  Text,
  Title,
  View,
} from 'native-base';
import ActionSheet from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  requestCameraPermission,
  requestExternalWritePermission,
} from '../Utils/GetPermissions';
import {StyleSheet} from 'react-native';

const actionSheetRef = React.createRef();

const CreateProduct = ({navigation}) => {
  let actionSheet;
  const [productImage, setProductImage] = React.useState();
  const [product, setProduct] = React.useState({
    name: '',
    category: '',
    price: 0,
    stock: 0,
  });
  const captureImage = async type => {
    let options = {
      mediaType: type,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setProductImage(response);
      });
    }
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setProductImage(response);
    });
  };
  const addProduct = () => {
    if (
      product.name.trim != '' &&
      product.price != 0 &&
      product.stock != 0 &&
      product.category.trim != '' &&
      productImage
    ) {
      alert('Added Product');
    } else {
      alert('boş bırakma');
    }
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
          <Title>Ürün Ekle</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => addProduct()}>
            <Icon name="add" />
          </Button>
        </Right>
      </Header>
      <View style={styles.content}>
        <Content>
          <Form>
            <Item
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <Image
                source={
                  productImage
                    ? {
                        uri: productImage?.uri,
                      }
                    : require('../Assets/selectPhoto.png')
                }
                style={{width: '100%', height: 200, resizeMode: 'contain'}}
              />
            </Item>
            <Item floatingLabel>
              <Label>Ürün Adı</Label>
              <Input
                value={product.name}
                onChangeText={text => setProduct({...product, name: text})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Categori</Label>
              <Input
                value={product.category}
                onChangeText={text => setProduct({...product, category: text})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Fiyat</Label>
              <Input
                value={product.price}
                onChangeText={text => setProduct({...product, price: text})}
                keyboardType="number-pad"
              />
            </Item>
            <Item floatingLabel>
              <Label>Stok</Label>
              <Input
                value={product.stock}
                onChangeText={text => setProduct({...product, stock: text})}
                keyboardType="number-pad"
              />
            </Item>
          </Form>
        </Content>
        <ActionSheet ref={actionSheetRef}>
          <Button
            info
            full
            rounded
            style={styles.button}
            onPress={() => setProductImage(captureImage('photo'))}>
            <Text>Fotograf Çek</Text>
          </Button>
          <Button
            info
            full
            rounded
            style={styles.button}
            onPress={() => setProductImage(chooseFile('photo'))}>
            <Text>Fotograf Seç</Text>
          </Button>
        </ActionSheet>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
});

export default CreateProduct;
