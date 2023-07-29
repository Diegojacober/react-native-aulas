import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function App() {

    const [valor, setValor] = useState(0);

    return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                
                <Slider 
                style={styles.slider}
                minimumValue={0} 
                maximumValue={100}
                onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
                value={valor}
                minimumTrackTintColor='lightgreen'
                maximumTrackTintColor='#F00'
                thumbTintColor='#000'
                
                />
                

                <Text>{valor.toFixed(0)}</Text>
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

    slider: {
        width: 320,
    },

});
