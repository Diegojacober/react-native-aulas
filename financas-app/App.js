import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Container, Nome, Titulo, Button, ButtonText } from './src/styles';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Titulo>Open up App.js to start working on your app!</Titulo>
      <Nome cor="#198">Diego</Nome>
      
      <Button>
        <ButtonText>Aoba</ButtonText>
      </Button>
    </Container>
  );
}
