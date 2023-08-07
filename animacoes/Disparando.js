import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';

export default function App() {

  const [LarguraAnimada, setLarAnimada] = useState(new Animated.Value(180))
  const [AlturaAnimada, setAltAnimada] = useState(new Animated.Value(60))
  const [OpacidadeAnimada, setOpaAnimada] = useState(new Animated.Value(0))

  const carregarGrafico = () => {

    Animated.sequence([
      Animated.timing(
        OpacidadeAnimada,
        {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        AlturaAnimada,
        {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }
      ),
    ]).start()

  }


  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#000'/>
      <View style={{ height: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169e1' }}>
        <TouchableOpacity onPress={carregarGrafico}>
          <Text style={{ fontSize: 25, color: "#FFF" }}>Gerar Gráfico</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'flex-end', alignItems: 'center' }}>
        <Animated.View style={{ width: LarguraAnimada, height: AlturaAnimada, backgroundColor: '#f00', justifyContent: 'center', opacity: OpacidadeAnimada}}>
          <Text style={{ color: '#FFFF', fontSize: 25, textAlign: 'center' }}>R$ 150,00</Text>
        </Animated.View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
  },
});
