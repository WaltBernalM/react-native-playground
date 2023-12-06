import { View, Text } from "react-native"

export default function Header() {
  return (
    <View style={{ backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          color: "black",
          textAlign: "center",
          marginTop: 30
        }}
      >
        Little Lemon
      </Text>
    </View>
  )
}
