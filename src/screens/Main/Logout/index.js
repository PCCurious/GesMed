import React, {useEffect} from "react";
import { BackHandler, TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Welcome(){
    const navigation = useNavigation();

    useEffect(() => {
        const backAction = () => {
          BackHandler.exitApp();
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    
      const handleExitPress = () => {
        BackHandler.exitApp();
      };

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.exitButton} onPress={handleExitPress}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
                <Image
                 source={require("../../../../assets/see-you.png")}
                 style={{width:"50%"}}
                 resizeMode="contain" />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>You're leaving GesMed Doctor Appointment App</Text>
                <Text style={styles.text}>If you want to login, press the login button, if not press the exit
                 {"\n"} See you soon</Text>
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
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginTop: 40,
        marginBottom: 12,
        textAlign: "center"
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
    exitButton:{
        position: "absolute",
        top: 30,
        right: 10,
        backgroundColor: "red",
        padding: 10,
        borderRadius:5,
    },
    buttonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});