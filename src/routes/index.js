import React from "react";
import SignIn from "../screens/SignIn";
import Welcome from "../screens/Welcome";
import Home from "../screens/Main/Home";
import Details from "../screens/Main/Details";
import Settings from "../screens/Main/Settings";
import List from "../screens/Main/List";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
                tabBarIcon:()=> <MaterialIcons name="home" color={"#43f3c1"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="Details"
            component={Details}
            options={{
                tabBarLabel:"Details",
                tabBarIcon:()=> <MaterialIcons name="list" color={"#43f3c1"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarLabel:"Settings",
                tabBarIcon:()=> <MaterialIcons name="build" color={"#43f3c1"} size={20}/>,
            }}
            />
            <Tab.Screen
            name="List"
            component={List}
            options={{
                tabBarLabel:"List",
                tabBarIcon:()=> <MaterialIcons name="list-alt" color={"#43f3c1"} size={20}/>,
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