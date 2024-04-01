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
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#FBDABB",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(57,76,69)",
    fontWeight: "bold",
    padding: 10,
    fontSize: 16,
  }
})
