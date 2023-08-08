import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Detalhes" component={Detalhes}/>
        </Stack.Navigator>
    )
}
