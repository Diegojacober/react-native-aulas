import { StyleSheet, Text, View, Button } from 'react-native';

export default function Entrar({ frase, sair, modalVisible }) {
    return (
        <View style={{ backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 15, }}>
            <Text style={{ color: '#fff', fontSize: 28 }}> {frase} </Text>
            <Button title='Sair' onPress={() => sair(modalVisible)} />
        </View>
    );
}
