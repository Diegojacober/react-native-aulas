import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from "./src/pages/Contato";

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: true, // cabeçalho de cima
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',


        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0,
        }

      }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={size} color={color} />
          },
        }}
        />

        <Tab.Screen name="Sobre" component={Sobre}
         options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({color, size}) => {
            return <AntDesign name="team" size={size} color={color} />
          },
        }}
        />
        <Tab.Screen name="Contato" component={Contato}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({color, size}) => {
              return <AntDesign name="contacts" size={size} color={color} />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

