import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';

const Login = ({navigation}) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left />
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.content}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input textContentType="emailAddress" />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button full info rounded style={styles.button}>
              <Text>Login</Text>
            </Button>
          </Form>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
            <Text style={{color: 'gray'}}>Bir market açmaya ne dersin?</Text>
          </TouchableOpacity>
        </Content>
      </View>
    </Container>
  );
};

export default Login;

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
