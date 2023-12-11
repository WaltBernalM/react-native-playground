import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta"
]

export default function MenuItems() {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={menuStyles.innerContainer}
      >
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  )
}


const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75
  },
  innerContainer: {
    padding: 40,
    backgroundColor: 'greedn'
  },
  headerText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: 'white'
  },
  itemText: {
    color: 'yellow',
    fontSize: 30
  }
})