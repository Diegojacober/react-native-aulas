import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.item}>
                <AntDesign name="user" size={65} color="#f456" />
                <Text style={{ color: '#f456', fontSize: 17, marginTop: 5, marginBottom: 35, }}>Bem-vindo(a) </Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: "center",
        color: '#f456',
        marginTop: 30,
    },
});

