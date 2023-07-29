import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        {/* Tirar a barra vertical do scroll showsVerticalScrollIndicator*/}
        {/* Tirar a barra horizontal do scroll showsHorizontalScrollIndicator*/}
        {/* Habilitar scroll scrollEnabled */}
        {/* tranformar em horizontal, horizontal={true} */}
        {/* Scrollview carrega tudo até oq não está sendo exibido */}

        <ScrollView style={styles.scrollView}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>


        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    width: "100%",
    height: "100%",
  },

  box1: {
    flex: 1,
    backgroundColor: 'red',
    height: 350,
  },

  box2: {
    flex: 1,
    backgroundColor: 'green',
    height: 350,
  },

  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 350,
  },

  box4: {
    flex: 1,
    backgroundColor: 'blue',
    height: 350,
  },

});
