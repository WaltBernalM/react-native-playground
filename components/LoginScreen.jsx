import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <ScrollView style={styles.container} keyboardDismissMode="interactive">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChange={setEmail}
            placeholder="email"
            keyboardType="email-address"
            clearButtonMode="while-editing"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChange={setPassword}
            placeholder="password"
            keyboardType="default"
            secureTextEntry={true}
            onBlur={() => {
              if (password.length <= 5) {
                return Alert.alert(
                  "Password is too short (at least 6 characters)"
                )
              }
            }}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              if (email.length > 5 && password.length > 5) {
                setLoggedIn(true)
              } else {
                Alert.alert('Please enter your email and password')
              }
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </>
      )}
      {loggedIn && (
        <Text style={styles.headerText}>You are Logged in!</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
})