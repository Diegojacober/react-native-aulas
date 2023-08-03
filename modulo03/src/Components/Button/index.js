import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button({ text, active, press }) {

    if (active) {
        return (
            <TouchableOpacity style={styles.buttonActive} onPress={press}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity style={styles.buttonInactive} onPress={press}>
            <Text style={styles.buttonTextInactive}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonActive: {
        backgroundColor: '#3883BB',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonInactive: {
        backgroundColor: '#3883BB',
        paddingHorizontal: 30,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        opacity: 0.6,
    },


    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
    },

    buttonTextInactive: {
        fontSize: 18,
        color: "#FFF",
    },
});
