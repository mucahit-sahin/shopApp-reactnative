import React from 'react';
import {Image} from 'react-native';
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
  Picker,
  Right,
  Text,
  Title,
  View,
} from 'native-base';
import ActionSheet from 'react-native-actions-sheet';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  requestCameraPermission,
  requestExternalWritePermission,
} from '../Utils/GetPermissions';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Loading from '../Components/Loading';
import {categories} from '../Data/categories';

const actionSheetRef = React.createRef();
const CreateProduct = ({navigation}) => {
  let user = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
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
      setLoading(true);
      let data = {
        id: user.email,
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
      };
      firestore()
        .collection('Products')
        .add(data)
        .then(d => {
          console.log('Product added!');
          storage()
            .ref('products/' + d.id)
            .putFile(productImage.uri)
            .then(() => {
              setLoading(false);
              navigation.navigate('Home');
            })
            .catch(e => console.log('uploading image error => ', e));
        });
    } else {
      alert('Please do not leave fields blank');
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
        {loading ? (
          <Loading />
        ) : (
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
                      : {
                          uri:
                            'data:image/png;base64,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',
                        }
                  }
                  style={{width: '100%', height: 150, resizeMode: 'contain'}}
                />
              </Item>
              <Item inlineLabel last>
                <Label>Name</Label>
                <Input
                  value={product.name}
                  onChangeText={text => setProduct({...product, name: text})}
                />
              </Item>
              <Item picker last>
                <Label>Category</Label>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select City"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  onValueChange={text =>
                    setProduct({...product, category: text})
                  }>
                  {categories.map((category, index) => (
                    <Picker.Item
                      label={category}
                      value={category}
                      key={index}
                    />
                  ))}
                </Picker>
              </Item>
              <Item inlineLabel last>
                <Label>Price</Label>
                <Input
                  value={product.price}
                  onChangeText={text => setProduct({...product, price: text})}
                  keyboardType="number-pad"
                />
              </Item>
              <Item inlineLabel last>
                <Label>Stock</Label>
                <Input
                  value={product.stock}
                  onChangeText={text => setProduct({...product, stock: text})}
                  keyboardType="number-pad"
                />
              </Item>
            </Form>
          </Content>
        )}
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
