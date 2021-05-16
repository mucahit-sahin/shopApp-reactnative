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
import React from 'react';
import {Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {getFirestore, getStorage} from '../Utils/firebase';
import Loading from '../Components/Loading';

const Profile = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [shop, setShop] = React.useState();
  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getFirestore('Shops', user.email).then(data => {
      setShop(data);
      getStorage('shop/' + data.id)
        .then(url => setImage(url))
        .then(() => setLoading(false));
    });
  }, []);
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left></Left>
        <Body>
          <Title>Profil</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => auth().signOut()}>
            <Icon name="log-out-outline" />
          </Button>
        </Right>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
            }}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={
                image
                  ? {uri: image}
                  : {
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }
              }
            />
            <Text style={{maxWidth: 200, marginLeft: 10, color: 'green'}}>
              {shop?.shopName}
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Item fixedLabel>
              <Label>Puan</Label>
              <Input disabled value="10/10" />
            </Item>
            <Item fixedLabel>
              <Label>İl</Label>
              <Input disabled value={shop?.city} />
            </Item>
            <Item fixedLabel>
              <Label>İlçe</Label>
              <Input disabled value={shop?.town} />
            </Item>
            <Item fixedLabel>
              <Label>Mahalle</Label>
              <Input disabled value={shop?.district} />
            </Item>
            <Item fixedLabel>
              <Label>Adres</Label>
              <Input disabled value={shop?.address} />
            </Item>
            <Button
              full
              rounded
              info
              onPress={() => navigation.navigate('Regions', {shop})}>
              <Text>Hizmet Bölgesini Güncelle</Text>
            </Button>
          </View>
        </Content>
      )}
    </Container>
  );
};

export default Profile;
