import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Home from "../pages/Home";


const Tab = createBottomTabNavigator();

export default function Routes() {
  return(
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
        <Tab.Screen name="HomeStack" component={StackRoutes} 
        options={{
          tabBarLabel: 'Inicio',
          headerShown: false,
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
  )
}

