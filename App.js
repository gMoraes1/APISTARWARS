import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const request = async (callBack) => {
  const response = await fetch('https://swapi.dev/api/starships');
  const parsed = await response.json();
  callBack(parsed.results);
};

export default function App() {
  const [register, setResgister] = useState([])

  useEffect(() => {
    request(setResgister)
  }, [])



  return (
    <View style={styles.container}>
      <Text>Usando API do Star Wars</Text>
      <FlatList
        data={register}
        keyExtractor={(item)=>item.name.toString()}
        renderItem={({ item }) =>
        <View style={styles.containerText}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.model}</Text>
          <Text style={styles.text}>{item.manufacturer}</Text>
        </View>
        }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    display: "flex",
    backgroundColor: "#CA56F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: "white",
  },
  text: {
    fontSize: 18,
    color: 'blue', 
  },
});
