import React from "react";
import { Text, View, StyleSheet } from 'react-native';


export default function Pessoa ({ data }) {
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>Nome: { data.nome }</Text>
            <Text style={styles.textoPessoa}>Email: { data.email }</Text>
            <Text style={styles.textoPessoa}>Idade: { data.idade }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15,
    },

    textoPessoa: {
        color: '#FFF',
        fontSize: 18,
    },
});
