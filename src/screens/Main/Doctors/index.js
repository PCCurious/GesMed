import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

export default function Doctors(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../../../assets/stethoscope.png")}
                style={{width: "50%"}}
                resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Welcome to the Doctors Screen</Text>
                <Text style={styles.text}>This will have the list of doctors</Text>
                <Text style={styles.text}>I hope you enjoy the app :D</Text>
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
        flex: 6,
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
        backgroundColor: "#89CFF0",
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