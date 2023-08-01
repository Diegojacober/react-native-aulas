import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function App() {

    const [name, setName] = useState()
    const [idade, setIdade] = useState()
    const [sexo, setSexo] = useState(1)
    const [limit, setLimit] = useState(0)
    const [student, setStudent] = useState(false)

    // let sexos = [
    //     { sigla: 'M', desc: 'Masculino' },
    //     { sigla: 'F', desc: 'Feminino' },
    // ]

    const save = () => {
        alert(`${name}, ${idade}, ${limit}, ${student}`)
    }

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
                keyboardType="number-pad"
                maxLength={3}
            />

            {/* <View style={styles.div}>
            <Text>Sexo: {sexo}</Text>
            <Picker
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
            >
                
            <Picker.item value="1" label="M - Masculino" />
            {/* <Picker.item key={2} value={2} label="F - Feminino" /> */}

            {/* </Picker> */}
            {/* </View>  */}


            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={10000}
                onValueChange={(valorSelecionado) => setLimit(valorSelecionado)}
                value={limit}
            />

            <Text>{limit.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            })}</Text>


            <View style={styles.div}>
            <Text>Estudante</Text>
            <Switch
                value={student}
                onValueChange={(value) => setStudent(value)}
                thumbColor={'darkblue'}
            />
            </View>

            <Button title='Abrir Conta' color={'#000'} onPress={save}/>

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

    slider: {
        width: 300,
    },

    div: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: 300,
    },

});