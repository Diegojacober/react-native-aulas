import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration } from 'react-native';

export default function App() {

  const [textoFrase, setTextoFrase] = useState('')
  const [img, setImg] = useState(require('./src/biscoito.png'))

  const frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  const quebrarBiscoito = () => {
    Vibration.vibrate(300)
    let numeroAleatorio= Math.floor(Math.random() * frases.length)

    setImg(require('./src/biscoitoAberto.png'))
    setTextoFrase(frases[numeroAleatorio])
    setTimeout(() => {
      setImg(require('./src/biscoito.png'))
      setTextoFrase('')
    }, 1500);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={true} backgroundColor='blue'/>
      
      <Image style={styles.image} source={img}/>
      
      <Text style={styles.frase}>{ textoFrase }</Text>

      <TouchableOpacity style={styles.botao} onPress={() => quebrarBiscoito()}>
        <View style={styles.btn}>
        <Text style={styles.btn_texto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },

  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 20,
    backgroundColor: '#dd7b22',
    
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  btn_texto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
