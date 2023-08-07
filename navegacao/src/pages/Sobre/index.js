import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>About us Page</Text>
      <AntDesign name="infocirlce" size={24} color="black" />
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
