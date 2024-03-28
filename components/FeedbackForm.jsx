import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

function FeedbackForm() {
  const [firstName, setFirstName] = useState(''), [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}>
      <ScrollView style={styles.container} keyboardDismissMode={"on-drag"}>
        <Text style={styles.headingSection}>
          How was your visit at Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro htat serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChange={setFirstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChange={setLastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChange={setMessage}
          placeholder="Feedback Message"
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    paddingTop: 0,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
    textAlignVertical: 'top'
  },
})

export default FeedbackForm