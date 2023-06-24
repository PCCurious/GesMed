import React from "react";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as LocalAuthentication from "expo-local-authentication";

const login ={
    email:"test@test.cv",
    password:"Test"
}

export default function SignIn(){
    const navigation = useNavigation();
    const [email,setEmail] = useState(""); //email: valor inicial, setEmail: estado guardado
    const [password, setPassword] = useState("");
    const handleLogin=()=>{
        if(email===login.email &&  password===login.password){
            navigation.navigate("MainScreen");
        }else{
            Alert.alert("Invalid Credentials");
            navigation.navigate("Welcome");
            // navigation.navigate("MainScreen");
        }
    }
    const handleDefaultAuthentication = async () => {
        const result = await LocalAuthentication.authenticateAsync();

        if(result.success){
            navigation.navigate("MainScreen");
        }else{
            Alert.alert("Failed Authentication");
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                 source={require("../../../assets/secure.png")}
                 style={{width:"50%"}}
                 resizeMode="contain" />
            </View>
            <View style={styles.containerHeader}>
                <Text style={styles.headerText}>Welcome</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                placeholder="email@example.com" 
                style={styles.input} 
                onChangeText={(text)=>setEmail(text)}
                value={email}
                />
                
                <Text style={styles.title}>Password</Text>
                <TextInput 
                placeholder="Input password" 
                style={styles.input} 
                onChangeText={(text)=>setPassword(text)} 
                value={password}
                secureTextEntry={true}
                />

                <TouchableOpacity 
                style={styles.button} 
                onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Aceder</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não tem conta? Registe-se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegister} 
                onPress={handleDefaultAuthentication}>
                    <MaterialIcons name="fingerprint" size={50} color="#89CFF0"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#89CFF0",
    },
    imageContainer:{
        flex: 2,
        backgroundColor: "#89CFF0",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm:{
        flex: 2,
        backgroundColor: "#fff",
        // justifyContent: "center",
        // alignItems: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        marginBottom: 10,
    },
    containerHeader:{
        marginTop:"14%",
        marginBottom: "8%",
        paddingStart: "5%",
    },
    headerText:{
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    title:{
        fontSize:20,
        marginTop: 28,
    },
    button:{
        backgroundColor: "#89CFF0",
        width:"100%",
        borderRadius:4,
        paddingVertical:8,
        marginTop: 14,
        justifyContent: "center",
        alignItems:"center",
    },
    buttonText:{
        color:"#fff",
        fontSize: 18,
        fontWeight:"bold",
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: "center",
    },
    registerText:{
        color: "#a1a1a1",
    }
});