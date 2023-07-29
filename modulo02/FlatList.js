import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

    // Data = lista que vai receber com os dados a serem renderizador
    //  renderItem responsável por montar, exibir na tela

    const [feed, setFeed] = useState([
        {id: 1, nome: 'Diego', idade: 18, email: 'diegoalencar.jacober@gmail.com',},
        {id: 2, nome: 'João', idade: 22, email: 'joao@gmail.com',},
        {id: 3, nome: 'Angelo', idade: 17, email: 'angelo@gmail.com',},
        {id: 4, nome: 'Marcos', idade: 85, email: 'marcos@gmail.com',},
        {id: 5, nome: 'Pedro', idade: 51, email: 'pedro@gmail.com',},
        {id: 6, nome: 'Matheus', idade: 78, email: 'matheus@gmail.com',},
    ])

    return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <FlatList 
                keyExtractor={(item) => item.id}
                data={feed} 
                renderItem={({item}) => <Pessoa data={item}/> } style={styles.flatlist}/>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
    },

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

function Pessoa({ data }) {
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>Nome: { data.nome }</Text>
            <Text style={styles.textoPessoa}>Email: { data.email }</Text>
            <Text style={styles.textoPessoa}>Idade: { data.idade }</Text>
        </View>
    )
}
