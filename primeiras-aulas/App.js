import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>

      <Jobs largura={250} altura={250} />
      <StatusBar style="light" hidden={false} />{/*backgroundColor='pink'*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#214168',
  },

  text: {
    color: "#DDD",
  },

  text1: {
    color: "#f00",
  },
});

class Jobs extends Component {

  entrar(nome) {
    this.setState({
      nome: nome,
    })
  }

  render() {

    let img = 'https://sujeitoprogramador.com/steve.png'

    return (
      <View>

        <Button title='Entrar' onPress={() => this.entrar('Opaaa')} />

        <Text style={styles.text1}> Texto 1 </Text>


        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
      </View>
    )

  }
}

