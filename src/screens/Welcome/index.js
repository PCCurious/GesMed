import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                 source={require("../../../assets/monitoramento.png")}
                 style={{width:"50%"}}
                 resizeMode="contain" />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Welcome Dear Friend</Text>
                <Text style={styles.text}>Please login to start</Text>
                <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("SignIn")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#43f3c1",
    },
    imageContainer:{
        flex: 2,
        backgroundColor: "#43f3c1",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        marginBottom: 10,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginTop: 40,
        marginBottom: 12,
    },
    text:{
        color: "#a1a1a1",
    },
    loginButton:{
        backgroundColor: "#43f3c1",
        borderRadius:50,
        paddingVertical: 12,
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "15%",
        alignSelf: "center",
    },
    buttonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});