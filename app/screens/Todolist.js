import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar,  TouchableOpacity } from 'react-native';
import Todo from './Todo';
import TodoListPicker from './TodoListPicker';
import SideNavButton from './SideNavButton';
import variables from './styles/Variables';
import {useTodoLists} from '../contexts/todolist-context';
import {useTodos} from '../contexts/todo-context';
import GestureRecognizer from 'react-native-swipe-gestures';

const Todolist = () => {
  const {state: {todoLists, isTodoListPickerOpen}, loadTodoLists, setTodoListPickerOpen} = useTodoLists();
  const {state: {todoList}, loadTodoListById} = useTodos();

  useEffect(() => {
    if (!todoLists) {
      loadTodoLists();
    }
  }, []);

  useEffect(() => {
    if (!todoList && todoLists && todoLists[0]) {
      loadTodoListById(todoLists[0]._id)
    }
  }, [todoLists]);

  const onSwipeRight = () => {
    setTodoListPickerOpen(true);
  };

  return (
    <GestureRecognizer 
      style={styles.background}
      onSwipeRight={onSwipeRight}
      config={{
        velocityThreshold: 0.2,
        directionalOffsetThreshold: 70
      }}
    >
      <SafeAreaView style={styles.container}>
        <SideNavButton isTodoListPickerOpen={isTodoListPickerOpen} setTodoListPickerOpen={() => setTodoListPickerOpen(true)}/>
        {
          todoList && <Text style={styles.projectTitle}>{todoList.projectTitle}</Text>
        }
        {
          todoList && todoList.todos.map(todo => <Todo key={todo._id} priority={todo.priority} text={todo.text} done={todo.done}/>)
        }
        { 
          isTodoListPickerOpen && <TodoListPicker />
        }
      </SafeAreaView>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: variables.colors.dark_grey
  },
  container: {
    flex: 1,
    backgroundColor: variables.colors.dark_grey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  projectTitle: {
    marginVertical: 15,
    fontSize: 40,
    color: variables.colors.letter_color,
    fontWeight: 'bold',
    marginHorizontal: 5
  }
});

export default Todolist;