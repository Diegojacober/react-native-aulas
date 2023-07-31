import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

    const [name, setName] = useState()
    const [idade, setIdade] = useState()
    const [sexo, setSexo] = useState()
    const [limit, setLimit] = useState(0)
    const [student, setStudent] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Your name"
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                onChangeText={setIdade}
                value={idade}
                placeholder="Your age"
                keyboardType="default"
            />
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

    input: {
        borderColor: 'darkblue',
        borderBottomWidth: 1,
        width: 250,
        marginBottom: 20,
    },

});