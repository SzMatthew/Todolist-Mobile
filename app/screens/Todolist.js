import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Todo from './Todo';
import TodoListPicker from './TodoListPicker';
import SideNavButton from './SideNavButton';
import variables from './styles/Variables';
import {useTodoLists} from '../contexts/todolist-context';
import {useTodos} from '../contexts/todo-context';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

  return (
    
      <GestureHandlerRootView style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Swipeable ref={swipeableRef} renderLeftActions={leftSwipeActions}>
            <View style={styles.helper}>
              <SideNavButton swipeableRef={swipeableRef} />
              {
                todoList && <Text style={styles.projectTitle}>{todoList.projectTitle}</Text>
              }
              {
                todoList 
                && <FlatList
                  data={todoList.todos}
                  renderItem={({ item }) => <Todo priority={item.priority} text={item.text} done={item.done}/>}
                  keyExtractor={(todo) => todo._id}
                />
              }
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