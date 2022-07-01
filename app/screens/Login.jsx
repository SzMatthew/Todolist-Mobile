import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import variables from './styles/Variables';


const Login = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.loginLabel}>Login</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.dark_grey,
  },
  loginLabel: {
    color: variables.colors.letter_color,
    fontSize: 30,
  }
});

export default Login;