import React from 'react';
import { StyleSheet, View, Text,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';

const SideNavButton = () => {
  const {setTodoListPickerOpen} = useTodoLists();

  return (
    <TouchableOpacity style={styles.todoListsWrapper} onPress={() => setTodoListPickerOpen(true)}>
      <Text style={styles.todoListsLabel}>Todo Lists</Text>
      <AntDesign name="right" size={22} color={variables.colors.lightest_grey} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoListsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 110,
    marginHorizontal: 4,
    marginTop: 10
  },
  todoListsLabel: {
    color: variables.colors.lightest_grey,
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 2
  }
});

export default SideNavButton