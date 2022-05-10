import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import variables from './styles/Variables';

const Todo = ({priority, text, done}) => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.icon}></View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  titleWrapper: {
    flexDirection: 'row',
    flexShrink: 1
  },
  title: {
    flexShrink: 1,
    marginLeft: 10,
    color: variables.colors.letter_color,
    fontWeight: 'bold',
    fontSize: 16,
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