import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';


export default function Home() {
  const Navigation = useNavigation();
  const [Products, setProducts] = React.useState([])
  const [flag, setFlag] = React.useState(true)
  const getAll = () => {
    setFlag(false)
  }

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setProducts([...response.data])
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{
        flag ?
          <TouchableOpacity onPress={getAll} >
            <Text
              style={{
                backgroundColor: '#3d84b8',
                paddingHorizontal: 40,
                paddingVertical: 10,
                color: 'white',
                fontSize: 24,
                borderRadius: 50,
              }}>
              Get Posts
          </Text>
          </TouchableOpacity>
          :
          <View style={{ flex: 1 }}>
            <FlatList
              data={Products}
              renderItem={({ item }) => (
                <TouchableOpacity key={item.id} onPress={()=>Navigation.navigate('productDetails',{data:item})}>
                  <View style={{ width: '90%', marginHorizontal: 'auto', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                    <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ width: 300, height: 150, borderRadius: 25, marginHorizontal: 'auto' }} />
                  </View>

                </TouchableOpacity>
              )}
            />
          </View>

      }
      </View>
    </View>
  );
}
