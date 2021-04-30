import React from 'react';
import {Body, Card, CardItem, Left, Right, Text, Thumbnail} from 'native-base';
import {TouchableOpacity} from 'react-native';

const ProductListItem = ({navigation, product}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {
          data: product,
        })
      }>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: product.image,
              }}
            />
          </Left>
          <Body style={{display: 'flex', justifyContent: 'center'}}>
            <Text>{product.name}</Text>
            <Text note>{product.category}</Text>
          </Body>
          <Right>
            <Text>{product.price} TL</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductListItem;
