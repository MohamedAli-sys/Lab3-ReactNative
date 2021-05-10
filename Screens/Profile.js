import React from 'react';
import { useNavigation } from '@react-navigation/native'
import {View, Text, StyleSheet} from 'react-native'
export default function Profile(){
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Profile Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems:'center', 
    justifyContent:'center',
    fontSize: 24
  }
})