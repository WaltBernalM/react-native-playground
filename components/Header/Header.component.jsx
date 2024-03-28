import { View, Text } from "react-native"
import HeaderStyles from "./Header.styles"

export default function Header() {
  return (
    <View style={HeaderStyles.viewStyle}>
      <Text style={HeaderStyles.textStyle}>Little Lemon</Text>
    </View>
  )
}
