import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={welcomeScreenStyle.container}>
      <Text style={welcomeScreenStyle.haeding}>Welcome to Little Lemon</Text>
      <Text style={welcomeScreenStyle.textBody}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  )
}

const welcomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  haeding: {
    paddingTop: 30,
    paddingHorizontal: 30,
    fontSize: 36,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textBody: {
    fontSize: 25,
    padding: 20,
    paddingHorizontal: 35,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  }
})