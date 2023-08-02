import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Components/Entrar';

export default function App() {

    const [modalVisible, setModalVisible] = useState(false)

    function entrar() {
        setModalVisible(true)
    }

    function sair(visible) {
        setModalVisible(!visible)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Button title="Entrar" onPress={entrar} />

            <Modal transparent={true} animationType='slide' visible={modalVisible}>
                <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                    <Entrar frase={'Opa'} sair={sair} modalVisible={modalVisible} />
                </View>
            </Modal>
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

