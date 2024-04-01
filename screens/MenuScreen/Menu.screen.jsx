
import { SectionList, Text, View } from "react-native"
import MenuItem from "../../components/MenuItem/MenuItem.component"
import MenuScreenStyles from "./Menu.screen.styles"
import MenuItemsData from '../../data/MenuItems.data'

export default function MenuScreen() {
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

  const Footer = () => <Text style={MenuScreenStyles.footerText}>Try them all!</Text>

  const Separator = () => <View style={MenuScreenStyles.separator}></View>

  const menuItems = MenuItemsData

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
