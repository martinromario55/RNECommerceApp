import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser'
import { Button } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession()

const Login = () => {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow()

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  const {
    container,
    subContainer,
    loginImage,
    loginButton,
    loginText,
    headingText,
    subHeadingText,
  } = styles
  return (
    <View style={container}>
      <Image
        source={require('../../../assets/images/welcome.jpg')}
        style={loginImage}
        resizeMode="contain"
      />

      <View style={subContainer}>
        <Text style={headingText}>
          Let's Find{' '}
          <Text style={{ fontWeight: 'bold' }}>
            Professional Cleaning and repair{' '}
          </Text>
          Service
        </Text>
        <Text style={subHeadingText}>
          Best App to find services near you which deliver you a professional
          service
        </Text>
        <TouchableOpacity style={loginButton} onPress={onPress}>
          <Text style={loginText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  loginImage: {
    width: '100%',
    height: 550,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 27,
    color: Colors.WHITE,
  },
  subHeadingText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.WHITE,
    marginTop: 20,
  },
  loginButton: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.PRIMARY,
  },
})
