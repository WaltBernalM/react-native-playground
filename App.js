import { View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import Menu from './components/Menu';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <Header />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <Menu /> */}
        {/* <FeedbackForm/> */}
        <LoginScreen/>
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View>
    </>
  )
}
