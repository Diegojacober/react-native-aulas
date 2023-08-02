import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import Resultado from './src/Components/Resultado';

export default function App() {

    const [alcool, setAlcool] = useState()
    const [gasolina, setGasolina] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [escolha, setEscolha] = useState()

    useEffect(() => {
        if (modalVisible == false) {
            setAlcool(null)
            setGasolina(null)
        }
    }, [modalVisible])

    const calcular = () => {
        if (!alcool || !gasolina) {
            alert('Preenche todos os campos')
            return;
        }

        let result = (alcool / gasolina)

        if( result <= 0.7 ) {
            setEscolha('Álcool')
        } else {
            setEscolha('Gasolina')
        }

        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.header}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
                <Text style={styles.textLogo}>Qual a melhor opção?</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>Álcool (preço por litro)</Text>
                    <TextInput value={alcool} onChangeText={(val) => setAlcool(val)} style={styles.input} keyboardType='number-pad' />
                </View>

                <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>Gasolina (preço por litro)</Text>
                    <TextInput value={gasolina} onChangeText={(val) => setGasolina(val)} style={styles.input} keyboardType='number-pad' />
                </View>

                <TouchableOpacity style={styles.button} onPress={calcular}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>
            </View>


            <Modal animationType='slide' visible={modalVisible}>
                <Resultado sair={() => setModalVisible(!modalVisible)} combustivel={escolha} gasolinaPreco={gasolina} alcoolPreco={alcool}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d2d2d',
        alignItems: 'center',
        paddingTop: 40,
    },

    header: {
        marginTop: "5%",
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
    },

    textLogo: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 24,
    },

    form: {
        marginTop: 80,
        width: '100%',
        alignItems: 'center',
    },

    inputArea: {
        width: "100%",
        padding: 20,
        alignItems: 'flex-start',
    },

    inputLabel: {
        fontSize: 18,
        color: '#fff',
    },

    input: {
        backgroundColor: '#ccc',
        width: "100%",
        height: 45,
        borderRadius: 5,
    },

    button: {
        width: "90%",
        backgroundColor: "#B22222",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
});