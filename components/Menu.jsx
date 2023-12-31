import { SectionList, StyleSheet, Text, View } from "react-native"

const menuItems = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
]

const Item = (props) => {
  const { name, price } = props
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  )
}

const Footer = () => <Text style={menuStyles.footerText}>Try everything!</Text>

const Separator = () => <View style={menuStyles.separator}></View>

function Menu() {
  const renderItem = (sections) => {
    const { item: { name, price } } = sections
    return <Item name={name} price={price} />
  } 

  const renderSectionHeader = (sections) => {
    const { section: { title } } = sections
    return (
      <View style={menuStyles.headerStyle}>
        <Text style={menuStyles.sectionHeader}>{title}</Text>
      </View>
    )
  }

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItems}
        keyExtractor={({ name }, index) => name + index}
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
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeader: {
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
    paddingVertical: 8,
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  headerStyle: {
    backgroundColor: "#F4CE14",
  },
})

export default Menu