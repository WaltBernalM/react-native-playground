import { View, Text, StyleSheet } from "react-native"

export default function Header() {
  return (
    <View style={headerStyles.viewStyle}>
      <Text style={headerStyles.textStyle}>Little Lemon</Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F4CE14",
  },
  textStyle: {
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 30,
  },
})
