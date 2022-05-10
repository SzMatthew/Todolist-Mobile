import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';


const TodoListPicker = ({ setTodoListPickerOpen }) => {
  const {state: {todoLists}} = useTodoLists();

  return (
    <SafeAreaView style={styles.todoListWrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.todoListLabelWrapper}>
          <Text style={styles.text}>Todo Lists</Text>
        </View>
        <AntDesign style={styles.closeIcon} name="close" size={24} color="white" onPress={() => setTodoListPickerOpen(false)}/>
        {
          todoLists && todoLists.map(todoList => <Text key={todoList._id}>{todoList.title}</Text>)
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  todoListWrapper: {
    position: 'absolute',
    zIndex: 2,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: variables.colors.dark_grey,
    top: 0, bottom: 0, left: 0, right: 0
  },
  scrollView: {
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  todoListLabelWrapper: {
    display: 'flex',
    padding: 15
  },
  text: {
    fontSize: 27,
    color: variables.colors.letter_color
  }
});

export default TodoListPicker