import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./screens/LoginScreen/Login.screen"
import WelcomeScreen from "./screens/WelcomeScreen/Welcome.screen"
import MenuScreen from "./screens/MenuScreen/Menu.screen"
import Header from "./components/Header"
import Footer from "./components/Footer/Footer.component"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen
            options={{ title: 'Login' }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ title: "Menu" }}
            name="Menu"
            component={MenuScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  )
}
