import React from "react";
import SignIn from "../screens/SignIn";
import Welcome from "../screens/Welcome";
import Home from "../screens/Main/Home";
import Appointments from "../screens/Main/Appointments";
import Settings from "../screens/Main/Settings";
import List from "../screens/Main/List";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:()=> <MaterialIcons name="home" color={"#89CFF0"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="Appointments"
            component={Appointments}
            options={{
                tabBarLabel:"Appointments",
                tabBarIcon:()=> <MaterialIcons name="list" color={"#89CFF0"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarLabel:"doctor",
                tabBarIcon:()=> <MaterialCommunityIcons name="doctor" color={"#89CFF0"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="List"
            component={List}
            options={{
                tabBarLabel:"Invoices",
                tabBarIcon:()=> <MaterialIcons name="list-alt" color={"#89CFF0"} size={20}/>,
            }}
            />
        </Tab.Navigator>
    );
}

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name="MainScreen" component={TabNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}