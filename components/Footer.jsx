import { StyleSheet, Text, View } from "react-native"

export default function Footer() {
  return (
    <View
      style={footerStyle.viewStyle}
    >
      <Text
        style={footerStyle.textStyle}
      >
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  )
}

const footerStyle = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F4CE14",
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    paddingVertical: 10,
  }
})