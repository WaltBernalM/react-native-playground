import { Text, View } from "react-native"
import MenuItemStyles from "./MenuItem.styles"

export default function MenuItem({name, price}) {
  return (
    <View style={MenuItemStyles.innerContainer}>
      <Text style={MenuItemStyles.itemText}>{name}</Text>
      <Text style={MenuItemStyles.itemText}>{price}</Text>
    </View>
  )
}
