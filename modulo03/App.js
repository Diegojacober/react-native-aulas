import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './src/Components/Header';
import Button from './src/Components/Button';
import { useEffect, useState } from 'react';
import api from './src/services/api';

export default function App() {

  const [active, setActive] = useState("USD")
  const [inputValue, setInputValue] = useState()
  const [value, setValue] = useState(50)
  const [currencies, setCurrencies] = useState()

  useEffect(() => {
    async function data() {
      await api.get('latest/?access_key=92b0648eab3ce661eb7ca76ec6545b2b&base=USD&symbols=GBP,JPY,EUR')
      .then((resp) => {
        console.log(resp.data)
      })

    }

    data()
  }, [])

  const changeCurrency = (currency) => {
    setActive(currency)
  }

  const convert = () => {
      if ( active === "USD" ) {
        console.log(currencies.USD)
      }
  }



  return (
    <View style={styles.container}>
      {/* <StatusBar style='dark' animated={true}/> */}
      <Header />

      <View style={styles.buttons}>
        <Button active={active === 'USD' ? true : false} text="USD" press={() => changeCurrency("USD")} />

        <Button active={active === 'EUR' ? true : false} text="EUR" press={() => changeCurrency("EUR")} />

        <Button active={active === 'LBR' ? true : false} text="LBR" press={() => changeCurrency("LBR")} />
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          keyboardType='number-pad'
          onChangeText={setInputValue}
          value={inputValue}
        />
      </View>

      <Text style={styles.value}>{value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</Text>

      <TouchableOpacity style={styles.button} onPress={convert}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 35,
    flex: 1,
    backgroundColor: '#323131',
    alignItems: 'center',
  },


  buttons: {
    marginTop: 50,
    width: "100%",
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row',
  },

  buttonActive: {
    backgroundColor: '#3883BB',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonInactive: {
    backgroundColor: '#3883BB',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    opacity: 0.6,
  },


  buttonText: {
    fontSize: 16,
    color: "#FFF",
  },

  inputArea: {
    marginTop: 60,
    width: "100%",
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: "65%",
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 5,
    textAlign: 'center',
  },

  value: {
    color: "#FFF",
    fontSize: 30,
    marginVertical: 50,
  },


  button: {
    backgroundColor: "#214168",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 20,
  },

});
