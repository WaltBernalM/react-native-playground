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
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: "#333333" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            }
          }}
        >
          <Stack.Screen
            name="Login"
            options={{ title: "Login" }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Welcome"
            options={{ title: "Home" }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Menu"
            options={{ title: "Menu" }}
            component={MenuScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  )
}
