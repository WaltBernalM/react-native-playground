import { Text, View } from "react-native";
import FooterStyles from "./Footer.styles";

export default function Footer() {
  return (
    <View style={FooterStyles.viewStyle}>
      <Text style={FooterStyles.textStyle}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  )
}