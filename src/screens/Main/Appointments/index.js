import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { Accelerometer } from "expo-sensors";

export default function Appointments(){
    const [data, setData] = useState({
        x:0,
        y:0,
        z:0,
    })

    const [steps, setSteps] = useState(0);

    useEffect(()=>{
        let lastY = 0;
        let isMoving = false;

        Accelerometer.addListener((accelerometerData)=>{
            const {y} = accelerometerData;

            //count steps based on changes in y-axis
            if(lastY && y > lastY + 0.1 && !isMoving){
                setSteps((prevSteps)=>prevSteps + 1);
                isMoving = true;
            }else if(lastY && y < lastY - 0.1 && isMoving){
                isMoving = false;
            }
            lastY = y;
            setData(accelerometerData);
        });
        return () => {
            Accelerometer.removeAllListeners();
        };
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../../../assets/magnifier.png")}
                style={{width: "50%"}}
                resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Welcome to the Appointments Screen</Text>
                {/* <Text style={styles.text}>Feel free to navigate in it</Text> */}
                <Text style={styles.text}>See your Appointments</Text>
                <Text style={styles.text}>I hope you enjoy the app :D</Text>
                {/* <Text>Step Details</Text>
                <Text>Accelerometer Data: {"\n"}
                x: {data.x.toFixed(2)} {"\n"}
                y: {data.y.toFixed(2)} {"\n"}
                z: {data.z.toFixed(2)} {"\n"}
                </Text>
                <Text>Steps: {steps}</Text> */}
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