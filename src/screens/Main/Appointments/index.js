import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "react-native";
import doctors from "../../../data/doctors";

export default function Appointments() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [price, setPrice] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]); // New state variable for appointments

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setAppointmentType(doctor.speciality);
    setPrice(doctor.appointmentValue);
  };

  const handleSubmit = () => {
    // Perform your logic to create the appointment using the form values
    const newAppointment = {
      patientName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      price,
    };

    // Add the new appointment to the existing list of appointments
    setAppointments([...appointments, newAppointment]);

    // Reset the form
    setSelectedDoctor(null);
    setPatientName("");
    setAppointmentDate("");
    setAppointmentTime("");
    setAppointmentType("");
    setPrice("");
    setShowForm(false); // Hide the form after submission
  };

  const handleNewAppointment = () => {
    setShowForm(true); // Show the form when the button is pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/appointment.png")}
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        {!showForm && (
          <TouchableOpacity style={styles.newAppointmentButton} onPress={handleNewAppointment}>
            <Text style={styles.buttonText}>New Appointment</Text>
          </TouchableOpacity>
        )}
      </View>
      {showForm && (
        <ScrollView contentContainerStyle={styles.containerForm}>
          <Text style={styles.title}>Welcome to the Appointments Screen</Text>
          <Text style={styles.text}>See your Appointments</Text>
          <Text style={styles.text}>This will be the list of appointments</Text>
          <Text style={styles.text}>I hope you enjoy the app :D</Text>

          {/* Patient Name Input */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Patient Name:</Text>
            <TextInput
              style={styles.input}
              value={patientName}
              onChangeText={setPatientName}
              placeholder="Enter patient name"
            />
          </View>

          {/* Appointment Date Input */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Appointment Date:</Text>
            <TextInput
              style={styles.input}
              value={appointmentDate}
              onChangeText={setAppointmentDate}
              placeholder="Enter appointment date"
            />
          </View>

          {/* Appointment Time Input */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Appointment Time:</Text>
            <TextInput
              style={styles.input}
              value={appointmentTime}
              onChangeText={setAppointmentTime}
              placeholder="Enter appointment time"
            />
          </View>

          {/* Doctor Selection */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Select a doctor:</Text>
            {doctors.map((doctor) => (
              <TouchableOpacity
                key={doctor.id}
                style={[
                  styles.doctorContainer,
                  selectedDoctor && selectedDoctor.id === doctor.id && styles.selectedDoctorContainer,
                ]}
                onPress={() => handleDoctorSelect(doctor)}
              >
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
                <Text style={styles.doctorAppointmentValue}>{doctor.appointmentValue}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Appointment Type */}
          {selectedDoctor && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Appointment Type:</Text>
              <TextInput
                style={styles.input}
                value={appointmentType}
                onChangeText={setAppointmentType}
                placeholder="Appointment type"
                editable={false}
              />
            </View>
          )}

          {/* Price Input */}
          {selectedDoctor && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Price:</Text>
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Price"
                keyboardType="numeric"
                editable={false}
              />
            </View>
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create Appointment</Text>
          </TouchableOpacity>

          {/* Appointment List */}
          <View style={styles.appointmentList}>
            <Text style={styles.appointmentListTitle}>Appointment List</Text>
            {appointments.map((appointment, index) => (
              <View key={index} style={styles.appointmentItem}>
                <Text>Patient Name: {appointment.patientName}</Text>
                <Text>Appointment Date: {appointment.appointmentDate}</Text>
                <Text>Appointment Time: {appointment.appointmentTime}</Text>
                <Text>Appointment Type: {appointment.appointmentType}</Text>
                <Text>Price: {appointment.price}</Text>
              </View>
            ))}
          </View>

        </ScrollView>
      )}
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
  buttonContainer: {
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
  containerForm: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  text: {
    color: "#a1a1a1",
  },
  formGroup: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  doctorContainer: {
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  selectedDoctorContainer: {
    borderColor: "#89CFF0",
    backgroundColor: "#eaf7fd",
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
  submitButton: {
    backgroundColor: "#89CFF0",
    borderRadius: 50,
    paddingVertical: 12,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  newAppointmentButton: {
    backgroundColor: "#89CFF0",
    borderRadius: 50,
    paddingVertical: 12,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "15%",
    alignSelf: "center",
  },
  appointmentList: {
    marginTop: 20,
    width: "100%",
  },
  appointmentListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  appointmentItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
