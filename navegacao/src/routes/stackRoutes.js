import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen title="Home" component={Home}/>
            <Stack.Screen title="Detalhes" component={Detalhes}/>
        </Stack.Navigator>
    )
}
