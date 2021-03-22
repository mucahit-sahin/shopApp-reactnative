import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Left></Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content />
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({});
