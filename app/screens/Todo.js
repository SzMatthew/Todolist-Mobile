import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import variables from './styles/Variables';

const Todo = () => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.icon}></View>
      <Text style={styles.title}>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: variables.colors.lightest_grey,
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
    borderWidth: 2
  }
});

export default Todo;