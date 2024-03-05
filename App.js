import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './src/Navigations/TabNavigation'

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (err) {
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          {/* <Text>You are Signed out </Text> */}
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
})
