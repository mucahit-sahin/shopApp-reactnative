import React from 'react';
import {
  Body,
  Container,
  Content,
  Header,
  Title,
  Text,
  Button,
  ListItem,
  CheckBox,
} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const Regions = ({navigation, route}) => {
  const {shop} = route.params;
  React.useEffect(() => {}, []);
  return (
    <Container>
      <Header style={{backgroundColor: '#62B1F6'}}>
        <Body>
          <Title>Hizmet Bölgeleri</Title>
        </Body>
      </Header>
      <Content>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
      </Content>
      <Button full rounded info style={{margin: 10}}>
        <Text>Güncelle</Text>
      </Button>
    </Container>
  );
};

export default Regions;
