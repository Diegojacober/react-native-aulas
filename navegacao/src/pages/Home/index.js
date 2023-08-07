import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Button title='Ir para sobre' onPress={() => navigation.navigate('Sobre')}/>
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
