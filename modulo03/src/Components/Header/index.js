import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Money Convert</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#214168',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 'auto',
    padding:  15,
  },

  text: {
    fontSize: 26,
    color: "#FFF",
  },

});
