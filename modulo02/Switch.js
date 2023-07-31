import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {

    const [status, setStatus] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Switch
                value={status}
                onValueChange={ (value) => setStatus(value) }
                thumbColor={'blue'}
            />

            <Text>{ status ? 'Ativo' : 'Inativo'}</Text>
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

});

