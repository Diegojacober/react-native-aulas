import React from "react";

import { View, Text, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato() {

    const navigation = useNavigation();

    const handleHome = () => {
        navigation.dispatch(StackActions.popToTop())
    }
    
    return(
        <View>
            <Text>Contato</Text>
            <Button title="inicio" onPress={handleHome}/>
        </View>
    )
}
