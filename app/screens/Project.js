import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import variables from './styles/Variables';
import { useTodos } from '../contexts/todo-context';


const Project = ({id, title, swipeableRef}) => {
  const { loadTodoListById } = useTodos();

  const handleProjectPress = () => {
    loadTodoListById(id);
    swipeableRef.current.close();
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
    fontSize: 30,
    color: variables.colors.letter_color,
    fontWeight: 'bold'
  }
});

export default Project;