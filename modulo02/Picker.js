import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {

    const [pizza, setPizza] = useState(0)
    const [pizzas, setPizzas] = useState([
        { key: 1, nome: 'Strognoff', valor: 35.00 },
        { key: 2, nome: 'Calabresa', valor: 40.00 },
        { key: 3, nome: 'Portuguesa', valor: 45.00 },
        { key: 4, nome: 'Frango com catupiry', valor: 55.00 },
    ])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.logo}>Menu Pizza</Text>

            <Picker
                selectedValue={pizza}
                onValueChange={(itemValue, itemIndex) => setPizza(itemValue)}
                >
                {
                   pizzas.map((v, k) => {
                    return <Picker.item key={k} value={k} label={`${v.nome}`}/>
                }) 
                }
            </Picker>

            <Text style={styles.pizzas}>Você escolheu: Pizza de {pizzas[pizza].nome}</Text>
            <Text style={styles.pizzas}>R$ {pizzas[pizza].valor.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
    },

    logo: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    pizzas: {
        marginTop: 15,
        fontSize: 25,
        textAlign: 'center',
    },

});
