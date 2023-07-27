import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0)
  const [btn, setBtn] = useState('Start')
  let timer = null
  let img = require('./assets/cronometro.png')

  const start = (e) => {
    if (timer != null) {
      clearInterval(timer)
      timer = null
      setBtn('Start')
    } else {
      timer = setInterval(() => {
        setNumero(e += 0.1)
      }, 100)
      setBtn('Stop')
    }
  }

  const clear = () => {
    clearInterval(timer)
    timer = null
    setNumero(0)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={true} backgroundColor='#000' />

      <Image source={img} style={styles.img}/>

      <Text style={styles.timer}>{numero.toFixed(1)}</Text> 

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.button} onPress={() => start(numero)}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>{ btn }</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => clear()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Clear</Text>
            </View>
        </TouchableOpacity>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    backgroundColor: "#00aeef"
  },

  timer: {
    marginTop: -120,
    fontSize: 65,
    fontWeight: 'bold',
    color: "#FFF",
  },

  btnArea: {
    marginTop:150,
    height: 40,
    flexDirection: 'row',
    gap: 15,
  },


  button: {
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 9,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
  },

  btnText: {
    color: "#00aeef",
    fontSize: 20,
    fontWeight: 'bold',
  },

  img: {
    width: 160,
    height: 180,
  },

});
