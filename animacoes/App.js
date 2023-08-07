import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';

export default function App() {

  const [LarguraAnimada, setLarAnimada] = useState(new Animated.Value(2))
  const [AlturaAnimada, setAltAnimada] = useState(new Animated.Value(60))
  const [OpacidadeAnimada, setOpaAnimada] = useState(new Animated.Value(0))
  let porcentagemAnimate = LarguraAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  Animated.loop(
    Animated.sequence([
      Animated.timing(
        LarguraAnimada,
        {
          toValue: 100,
          duration: 2000,
          useNativeDriver: false,
        }
      ),

      Animated.timing(
        LarguraAnimada,
        {
          toValue: 2,
          duration: 2000,
          useNativeDriver: false,
        }
      ),
    ])
  ).start()

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#000'/>
      
      <Animated.View style={{ backgroundColor: "#4169e1", width: porcentagemAnimate, height: 25, }}>

      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    justifyContent: 'center',
    alignItems: 'start',
  },
});
