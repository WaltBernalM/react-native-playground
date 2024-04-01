import { AppRegistry, Platform } from "react-native"
import App from "./App"

AppRegistry.registerComponent('main', () => App)

if (Platform.OS === 'ios') { 
  const rootTag = document.getElementById('root')
  AppRegistry.runApplication('main', { rootTag })
}