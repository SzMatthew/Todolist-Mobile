import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const NoTodo = () => {
  return (
    <View style={styles.background}>
      <Text>No Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NoTodo