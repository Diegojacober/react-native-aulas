import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';

export default function App() {

  const [LarguraAnimada, setLarAnimada] = useState(new Animated.Value(180))
  const [AlturaAnimada, setAltAnimada] = useState(new Animated.Value(60))
  const [OpacidadeAnimada, setOpaAnimada] = useState(new Animated.Value(1))


  Animated.loop(
    Animated.sequence([
      Animated.timing(LarguraAnimada, {
        toValue: 350,
        duration: 1000,
        useNativeDriver: false,
      }),

      Animated.timing(LarguraAnimada, {
        toValue: 180,
        duration: 1000,
        useNativeDriver: false,
      }),
    ])
  ).start()


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={{ width: LarguraAnimada, height: AlturaAnimada, borderRadius: 20, backgroundColor: '#4169e1', justifyContent: 'center', opacity: OpacidadeAnimada, }}>
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
