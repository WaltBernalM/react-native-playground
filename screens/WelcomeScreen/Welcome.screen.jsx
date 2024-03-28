import { Image, Text, View } from "react-native"
import littleLemonLogo from "../../img/littleLemonLogo.png"
import WelcomeScreenStyles from "./Welcome.screen.styles"

export default function WelcomeScreen() {
  return (
    <View style={WelcomeScreenStyles.container}>
      <Image style={WelcomeScreenStyles.logo} source={littleLemonLogo} />
      <Text style={WelcomeScreenStyles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  )
}
