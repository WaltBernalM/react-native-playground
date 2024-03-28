import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput } from "react-native";
import LoginScreenStyles from "./Login.screen.styles";

export default function LoginScreen() {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const loginBody = { email: null, password: null }

  const handleInput =(text, type) => {
    if (type === 'email') {
      loginBody.email = text
      setEmailInput(text)
      return
    }
    loginBody.password = text
    setPasswordInput(text)
  }

  return (
    <ScrollView
      style={LoginScreenStyles.container}
      keyboardDismissMode="interactive"
    >
      <Text style={LoginScreenStyles.headerText}>Welcome to Little Lemon</Text>

      {!loggedIn && (
        <>
          <Text style={LoginScreenStyles.regularText}>Login to continue</Text>
          <TextInput
            style={LoginScreenStyles.input}
            value={emailInput}
            onChangeText={(text) => handleInput(text, 'email')}
            placeholder="email"
            keyboardType="email-address"
            clearButtonMode="while-editing"
          />
          <TextInput
            style={LoginScreenStyles.input}
            value={passwordInput}
            onChangeText={(text) => handleInput(text, 'password')}
            placeholder="password"
            keyboardType="default"
            secureTextEntry={true}
            onBlur={() => {
              if (password.length <= 5 && password !== null) {
                return Alert.alert(
                  "Password is too short (at least 6 characters)"
                )
              }
            }}
          />
          <Pressable
            style={LoginScreenStyles.button}
            onPress={() => {
              if (emailInput && emailInput.length > 5 && passwordInput && passwordInput.length > 5) {
                setLoggedIn(true)
              } else {
                Alert.alert(`Please enter your email and password`)
              }
            }}
          >
            <Text style={LoginScreenStyles.buttonText}>log in</Text>
          </Pressable>
        </>
      )}
      {loggedIn && (
        <Text style={LoginScreenStyles.headerText}>You are Logged in!</Text>
      )}
    </ScrollView>
  )
}
