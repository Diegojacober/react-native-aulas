import { StyleSheet, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export default function Sobre() {

  const route = useRoute()
  const navigation = useNavigation();

  //useeffect sincrono
  useLayoutEffect(() => {
    navigation.setOptions({
        title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
    })
  }, [navigation])
    
  return (
    <View style={styles.container}>
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.nome}</Text>
      <AntDesign name="infocirlce" size={24} color="black" />
      {/* <Button title='Ir para contatos' onPress={() => navigation.navigate('Contato')}/>
      <Button title='Voltar tela' onPress={() => navigation.goBack()}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
