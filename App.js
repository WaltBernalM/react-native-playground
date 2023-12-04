import { View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: '#495E57'
      }}>
        <Header />
      </View>
      <View style={{
        backgroundColor: "#495E57"
      }}>
        <Footer />
      </View>
    </>
  )
}
