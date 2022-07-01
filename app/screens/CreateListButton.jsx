import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';


const CreateNewListButton = () => {
  const {setCreateNewListOpen} = useTodoLists();

  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => setCreateNewListOpen(true)}>
      <Text style={styles.text}>Create New List</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: variables.colors.red,
    borderRadius: 15,
    margin: 20
  },
  text: {
    margin: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: variables.colors.dark_grey
  }
});
export default CreateNewListButton