import React from 'react';
import {useRoute} from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SingleProduct() {
    const { params } = useRoute();
    const product = params.data;
    return (
        <View style={{ flex: 1, width: '95%', marginHorizontal: 'auto',paddingVertical:15 }}>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.img} />
            <Text style={{ fontSize: 24, color: '#eee ', textAlign:'center' }}>{product.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  img:{
    width: 300,
    height: 150, 
    borderRadius: 15, 
    marginHorizontal: 'auto'
  }
})