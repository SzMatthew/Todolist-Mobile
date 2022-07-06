import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AddPostImage from './AddTodoImage';
import variables from './styles/Variables';

const NoTodo = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>There are no TODOs!</Text>
      <View style={styles.imageWrapper}>
        <AddPostImage />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: variables.colors.letter_color,
    marginBottom: 100
  },
});

export default NoTodo