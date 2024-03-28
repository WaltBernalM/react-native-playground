
import MenuItem from "../../components/MenuItem/MenuItem.component"
import MenuScreenStyles from "./Menu.screen.styles"

export default function MenuScreen(menuItems) {
  const renderItem = (sections) => {
    const {
      item: { name, price },
    } = sections
    return <MenuItem name={name} price={price} />
  }

  const renderSectionHeader = (sections) => {
    const { section: { title } } = sections
    return (
      <View style={MenuScreenStyles.headerStyle}>
        <Text style={MenuScreenStyles.sectionHeader}>{title}</Text>
      </View>
    )
  }

  return (
    <View style={MenuScreenStyles.container}>
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
