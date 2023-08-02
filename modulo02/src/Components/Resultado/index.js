import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Resultado({ sair, combustivel, alcoolPreco, gasolinaPreco }) {
    return (
        <View style={{ backgroundColor: '#292929', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={styles.header}>
                <Image source={require('../../../assets/gas.png')} style={styles.logo} />
                <Text style={{
                    color: '#32CD32',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 24,
                }}>Compensa usar {combustivel}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.title}>Com os preços:</Text>
                <Text style={styles.preco}>Álcool: {alcoolPreco}</Text>
                <Text style={styles.preco}>Gasolina: {gasolinaPreco}</Text>
            </View>
            
            <TouchableOpacity onPress={() => sair()} style={styles.button}>
                <Text style={styles.textbutton}>Calcular novamente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
    },

    info: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },


    button: {
        marginTop: 25,
        borderColor: "#B22222",
        borderWidth: 2,
        width: "65%",
        padding: 5,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },


    textbutton: {
        color: "#FF0000",
        fontWeight: 'bold',
    },

    preco: {
        fontSize: 14,
        color: "#FFF",
        marginTop: 8,
    },
});
