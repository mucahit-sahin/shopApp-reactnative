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
import React from 'react';
import {Picker, StyleSheet, TouchableOpacity} from 'react-native';

const Signup = ({navigation}) => {
  const [city, setCity] = React.useState('Wallet');
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left />
        <Body>
          <Title>Sign up</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.content}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Telefon Numarası</Label>
              <Input
                mask={'+1 ([000]) [000] [00] [00]'}
                keyboardType="number-pad"
              />
            </Item>
            <Item floatingLabel>
              <Label>Market Adı</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Ad ve Soyad</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>İl</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>İlçe</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Adres</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>
        </Content>
        <Button full info rounded style={styles.button}>
          <Text>Sign up</Text>
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
          <Text style={{color: 'gray'}}>Zaten bir hesabım var</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
  },
});
