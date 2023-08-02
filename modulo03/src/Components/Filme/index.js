import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Filme({ data }) {

    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image source={{uri: data.foto}} style={styles.capa} />

                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => alert(data.sinopse)}>
                        <Text style={styles.textbtn}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },

    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },

    titulo: {
        fontSize: 18,
        padding: 15,

    },

    capa: {
        height: 250,
        zIndex: 2,
    },

    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },

    btn: {
        width: 100,
        backgroundColor: "#09a6ff",
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    textbtn: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '400',
    },
});