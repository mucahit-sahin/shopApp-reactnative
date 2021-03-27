import React from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import {TouchableOpacity} from 'react-native';

const ProductListItem = ({
  navigation,
  productName,
  productCategory,
  productPrice,
  productImage,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {
          data: {productName, productCategory, productPrice, productImage},
        })
      }>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: productImage,
              }}
            />
          </Left>
          <Body style={{display: 'flex', justifyContent: 'center'}}>
            <Text>{productName}</Text>
            <Text note>{productCategory}</Text>
          </Body>
          <Right>
            <Text>{productPrice} TL</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductListItem;
