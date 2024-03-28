import { StyleSheet } from "react-native";

export default LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    paddingBottom: 0,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "white",
    textAlign: "center",
    paddingBottom: 0,
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
    backgroundColor: "#FBDABB",
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
