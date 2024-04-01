import { StyleSheet } from "react-native"

export default WelcomeScreenStyles = StyleSheet.create({
  logo: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    paddingTop: 10,
    paddingHorizontal: 30,
    fontSize: 24,
    color: "#495E57",
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  button: {
    paddingTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    backgroundColor: "blue",
    textAlign: "center",
    color: "white",
    padding: 10,
    fontSize: 16
  },
})
