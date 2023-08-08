import { styled } from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`

export const Titulo = styled.Text`
  color: #f48;
  font-size: 20px;
`
export const Nome = styled.Text`
color:${props => props.cor};
font-size: 15px;
`

export const Button = styled.TouchableOpacity`
background-color: #190;
height: 40px;
width: 150px;
border-radius: 5px;
justify-content: center;
align-items: center;
`

export const ButtonText = styled.Text`
color: #FFF;
font-size: 15px;
text-align: center;
`