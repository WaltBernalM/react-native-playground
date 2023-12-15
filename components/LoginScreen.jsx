import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <ScrollView style={styles.container} keyboardDismissMode="interactive">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChange={setEmail}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChange={setPassword}
        placeholder="password"
        keyboardType="default"
        secureTextEntry={true}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  }
})