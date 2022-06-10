import React from 'react';
import { StyleSheet, View, Text,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';

const SideNavButton = () => {
  const {setTodoListPickerOpen} = useTodoLists();

  return (
    <TouchableOpacity onPress={() => setTodoListPickerOpen(true)}>
      <View style={styles.todoListsWrapper}>
        <Text style={styles.todoListsLabel}>Todo Lists</Text>
        <AntDesign name="right" size={20} color={variables.colors.lightest_grey} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoListsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 4
  },
  todoListsLabel: {
    color: variables.colors.lightest_grey,
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 2
  }
});

export default SideNavButton