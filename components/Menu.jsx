import { SectionList, StyleSheet, Text, View } from "react-native"

const menuItems = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ]
  },
  {
    title: "Main Dishes",
    data: [
      "Lentil Burger",
      "Smoked Salmon",
      "Kofta Burger",
      "Turkish Kebab"
    ]
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ]
  },
  {
    title: "Desserts",
    data: [
      "Baklava",
      "Tartufo",
      "Tiramisu",
      "Panna Cotta"
    ]
  }
]

const Item = (props) => {
  const { name } = props
  return (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
)}

const Footer = () => <Text style={menuStyles.footerText}>Little Lemon 2022</Text>

const Separator = () => <View style={menuStyles.separator}></View>

function Menu() {
  const renderItem = (props) => {
    const { item } = props
    return <Item name={item} />
  } 

  const renderSectionHeader = (props) => {
    const { section: {title}} = props
    return <Text style={menuStyles.sectionHeader}>{title}</Text>
  }

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItems} // Section is referred as menuItems[i], it generates an object for each data in the section
        keyExtractor={(item, index) => item + index} // Item is referred as menuItems[i].data
        renderItem={renderItem} // Each object inside the array is treated as section, and the "data" of menuItems is treated as "data" for the created SectionList object
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  )
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
})

export default Menu