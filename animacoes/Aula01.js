import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';

export default function App() {

  const [LarguraAnimada, setLarAnimada] = useState(new Animated.Value(150))
  const [AlturaAnimada, setAltAnimada] = useState(new Animated.Value(50))

  Animated.timing(
    LarguraAnimada, {
      toValue: 300,
      duration: 2000, //milisegundos
      useNativeDriver: false,
    }
  ).start()

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: LarguraAnimada, height: AlturaAnimada, backgroundColor: '#4169e1', justifyContent: 'center', }}>
        <Text style={{ color: '#FFFF', fontSize: 25, textAlign: 'center' }}>Carregando...</Text>
      </Animated.View>
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
