import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import variables from './styles/Variables';
import { useTodos } from '../contexts/todo-context';


const Project = ({id, title, swipeableRef}) => {
  const { state: {todoList}, loadTodoListById, setTodoList } = useTodos();

  const handleProjectPress = () => {
    loadTodoListById(id);
    setTodoList(null);
    swipeableRef.current.close();
  };

  const checkActiveTodolist = () => {
    if (todoList && id === todoList.projectId) {
      return {color: variables.colors.red}
    }
    return {color: variables.colors.letter_color};
  }

  return (
    <TouchableOpacity style={styles.projectWrapper} onPress={handleProjectPress}>
      <Text style={[checkActiveTodolist(), styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  projectWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 7
  },
  title: {
    width: 300,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Project;