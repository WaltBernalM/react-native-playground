import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import LoginScreen from "../screens/LoginScreen/Login.screen"
import WelcomeScreen from "../screens/WelcomeScreen/Welcome.screen"
import MenuScreen from "../screens/MenuScreen/Menu.screen"
import Header from "../components/Header/Header.component"
import Footer from "../components/Footer/Footer.component"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default function ScreenRouter() {
  return (
    <>
      <Header />
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#333333" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            }
          }}
        >
          <Stack.Screen name="Login" options={{ title: "Login" }} component={LoginScreen} />
          <Stack.Screen name="Welcome" options={{ title: "Home" }} component={WelcomeScreen} />
          <Stack.Screen name="Menu" options={{ title: "Menu" }} component={MenuScreen} />
        </Stack.Navigator> */}
        {/* <Tab.Navigator
          initialRouteName="Welcome"
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === "Welcome") {
                iconName = focused
                  ? 'home'
                  : 'home-outline'
              } else if (route.name === 'Menu') {
                iconName = 'list'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen name="Welcome" options={{ title: " Home" }} component={WelcomeScreen} />
          <Tab.Screen name="Menu" options={{ title: "Menu" }} component={MenuScreen} />
        </Tab.Navigator> */}
        <Drawer.Navigator>
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Menu" component={MenuScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  )
}
