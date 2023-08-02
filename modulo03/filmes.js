import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import Filme from './src/Components/Filme';

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function data() {
      setLoading(true)
      await api.get('r-api/?api=filmes/')
        .then((resp) => {
          setFilmes(resp.data)
          setLoading(false)
        })
        .catch((e) => {
          console.log(e)
        })
    }

    data()
  }, [])

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
        <ActivityIndicator color="#09a6ff" size={40} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={filmes}
        style={styles.lista}
        renderItem={({ item }) => <Filme data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
    alignItems: 'center',
  },
});
