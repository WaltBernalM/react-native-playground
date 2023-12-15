import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import Menu from './components/Menu';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import { useState } from 'react';

export default function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <Header />
        {!showMenu && <WelcomeScreen />}
        <Pressable
          style={styles.button}
          onPress={() => {
            setShowMenu(!showMenu)
          }}
        >
          <Text style={styles.buttonText}>{showMenu ? "Home" : "Menu"}</Text>
        </Pressable>
        {showMenu && <Menu />}
        {/* <MenuItems /> */}
        {/* <FeedbackForm/> */}
        {/* <LoginScreen/> */}
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  }
})
