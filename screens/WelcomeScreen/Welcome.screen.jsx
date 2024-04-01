import { Image, Pressable, Text, View } from "react-native"
import littleLemonLogo from "../../img/littleLemonLogo.png"
import WelcomeScreenStyles from "./Welcome.screen.styles"
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={WelcomeScreenStyles.container}>
      <Image style={WelcomeScreenStyles.logo} source={littleLemonLogo} />
      <Text style={WelcomeScreenStyles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable style={WelcomeScreenStyles.button} onPress={() => navigation.navigate("Menu")}>
        <Text style={WelcomeScreenStyles.buttonText}>See Menu</Text>
      </Pressable>
    </View>
  )
}
