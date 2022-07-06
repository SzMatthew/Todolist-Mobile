import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import Todo from './Todo';
import TodoListPicker from './TodoListPicker';
import SideNavButton from './SideNavButton';
import Loading from './Loading';
import variables from './styles/Variables';
import {useTodoLists} from '../contexts/todolist-context';
import {useTodos} from '../contexts/todo-context';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NoTodo from './NoTodo';
import CreateTodoButton from './CreateTodoButton';

const Todolist = () => {
  const {state: {todoLists}, loadTodoLists} = useTodoLists();
  const {state: {todoList}, loadTodoListById} = useTodos();
  const swipeableRef = useRef(null);

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

  const leftSwipeActions = () => {
    return (
      <TodoListPicker swipeableRef={swipeableRef}/>
    );
  };

  const TodoList = () => {
    if (todoList?.todos?.length === 0) {
      return <NoTodo />
    } else if (todoList) {
      return (
        <FlatList
          data={todoList.todos}
          renderItem={
            ({ item }) => <Todo priority={item.priority} text={item.text} done={item.done}/>
          }
          keyExtractor={(todo) => todo._id}
          ListHeaderComponent={
            () => <Text style={styles.projectTitle}>{todoList.projectTitle}</Text>
          }
        />
      );
    } else {
      return <Loading />
    }
  };

  return (
    <GestureHandlerRootView style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Swipeable ref={swipeableRef} renderLeftActions={leftSwipeActions} leftThreshold={50}>
          <View style={styles.helper}>
            <SideNavButton swipeableRef={swipeableRef} />
            <TodoList />
            <CreateTodoButton />
          </View>
        </Swipeable>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  },
  helper: {
    paddingLeft: 15,
    height: '100%',
    backgroundColor: variables.colors.dark_grey,
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