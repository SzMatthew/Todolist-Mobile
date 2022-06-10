import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import variables from './styles/Variables';
import { useTodos } from '../contexts/todo-context';
import { useTodoLists } from '../contexts/todolist-context';


const Project = ({id, title}) => {
  const { loadTodoListById } = useTodos();
  const { setTodoListPickerOpen } = useTodoLists();

  const handleProjectPress = () => {
    loadTodoListById(id);
    setTodoListPickerOpen(false);
  };

  return (
    <TouchableOpacity style={styles.projectWrapper} onPress={handleProjectPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  projectWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    width: 300,
    fontSize: 24,
    color: variables.colors.letter_color,
    fontWeight: 'bold'
  }
});

export default Project;