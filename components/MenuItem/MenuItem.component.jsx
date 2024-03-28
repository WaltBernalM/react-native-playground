import MenuItemStyles from "./MenuItem.styles"

export default function MenuItem(props) {
  const { name, price } = props
  return (
    <View style={MenuItemStyles.innerContainer}>
      <Text style={MenuItemStyles.itemText}>{name}</Text>
      <Text style={MenuItemStyles.itemText}>{price}</Text>
    </View>
  )
}
