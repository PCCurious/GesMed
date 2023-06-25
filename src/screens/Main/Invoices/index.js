import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

export default function Invoices(){
    const [courseGoals, setCourseGoals] = useState([]);
    const [goalInput, setGoalInput] = useState("");
    function goalInputHandler(enteredText){
        setGoalInput(enteredText);
    }
    function addGoalHandler(){
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, goalInput]);
    }
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style = {styles.textInput}
                placeholder="Insert your objective"
                onChangeText={goalInputHandler}/>
                <Button title="Add" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={courseGoals}
                    renderItem={(itemData)=>{
                        return(
                            <View style={styles.goalItem} key={itemData.index}>
                                <Text>{itemData.item}</Text>
                            </View>
                        );
                    }}
                />
                {/* <ScrollView>
                {courseGoals.map((goal)=>(
                            <View style={styles.goalItem} key={goal}>
                                <Text>{goal}</Text>
                            </View>
                    ))
                }
                </ScrollView> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 25,
        paddingHorizontal: 16,
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingBottom: 10,
    },
    textInput:{
        borderWidth:1,
        borderColor:"#ccc",
        width: "85%",
        marginRight:4,
        padding:5,
    },
    goalsContainer:{
        flex: 2,
        borderWidth: 1,
        backgroundColor: "#51EAC1",
        borderRadius:6,
    },
    goalItem: {
        margin: 2,
        padding: 2,
        backgroundColor: "#89CFF0",
    },
});