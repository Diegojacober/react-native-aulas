import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

    const [input, setInput] = useState()
    const [nome, setNome] = useState()

    useEffect(() => {
        async function getData() {
            await AsyncStorage.getItem('nome').then( (value) => {
                setNome(value)
            })
        }

        getData()
    }, [])

    function gravaNome() {
        setNome(input)
        Keyboard.dismiss()
    }

    useEffect( (_, prevState) => {

        async function save() {
            if(prevState !== nome) {
                await AsyncStorage.setItem('nome', nome);
            }
        }

        save()
       
    }, [nome])


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.viewInput}>
                <TextInput
                    editable
                    style={styles.input}
                    onChangeText={e => setInput(e)}
                    value={input}
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity onPress={gravaNome}>
                    <Text style={styles.botao}>+</Text>
                
                </TouchableOpacity>
            </View>



            <Text style={styles.nome}>{nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40,
    },

    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        width: 350,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
    },

    botao: {
        backgroundColor: '#222',
        color: '#fff',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    nome: {
        marginTop: 15,
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
    },
});

