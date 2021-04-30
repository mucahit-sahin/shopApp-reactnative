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

const Profile = () => {
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
          <Title>Profile</Title>
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
              <Label>Point</Label>
              <Input disabled value="10/10" />
            </Item>
            <Item fixedLabel>
              <Label>City</Label>
              <Input disabled value={shop?.city} />
            </Item>
            <Item fixedLabel>
              <Label>Town</Label>
              <Input disabled value={shop?.town} />
            </Item>
            <Item fixedLabel>
              <Label>District</Label>
              <Input disabled value={shop?.town} />
            </Item>
            <Item fixedLabel>
              <Label>Address</Label>
              <Input disabled value={shop?.address} />
            </Item>
          </View>
        </Content>
      )}
    </Container>
  );
};

export default Profile;
