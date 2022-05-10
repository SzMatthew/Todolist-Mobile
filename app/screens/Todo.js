import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import variables from './styles/Variables';

const Todo = ({priority, text, done}) => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.icon}></View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5
  },
  title: {
    marginLeft: 10,
    color: variables.colors.letter_color,
    fontWeight: 'bold',
    fontSize: 17
  },
  icon: {
    width: 22,
    height: 22,
    borderRadius: 7,
    borderColor: variables.colors.red,
    borderWidth: 2,
    marginVertical: 3
  }
});

export default Todo;