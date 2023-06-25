import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import doctors from "../../../data/doctors";

export default function Doctors(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../../../assets/stethoscope.png")}
                    style={{width: "50%"}}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Welcome to the Doctors Screen</Text>
                {doctors.map((doctor) => (
                    <View key={doctor.id} style={styles.doctorContainer}>
                        <Text style={styles.doctorName}>{doctor.name}</Text>
                        <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
                        <Text style={styles.doctorAppointmentValue}>{doctor.appointmentValue}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#89CFF0",
    },
    imageContainer: {
        flex: 2,
        backgroundColor: "#89CFF0",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm: {
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 12,
    },
    doctorContainer: {
        marginBottom: 10,
        alignItems: "center",
    },
    doctorName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    doctorSpeciality: {
        fontSize: 14,
        marginBottom: 3,
    },
    doctorAppointmentValue: {
        fontSize: 14,
        color: "#a1a1a1",
    },
});
