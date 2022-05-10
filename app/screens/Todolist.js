import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Todo from './Todo';
import TodoListPicker from './TodoListPicker';
import variables from './styles/Variables';
import ApiCalls from '../utils/ApiCalls';
import {useTodoLists} from '../contexts/todolist-context';
import {useTodos} from '../contexts/todo-context';

const Todolist = () => {
  const [isTodoListPickerOpen, setTodoListPickerOpen] = useState(false);
  const {state: {todoLists}, loadTodoLists} = useTodoLists();
  const {state: {todoList}, loadTodoListById} = useTodos();

  useEffect(() => {
    if (!todoLists) {
      loadTodoLists();
    }
  }, []);

  useEffect(() => {
    if (todoLists && todoLists[0]) {
      loadTodoListById(todoLists[0]._id)
    }
  }, [todoLists]);

  return (
    <SafeAreaView style={styles.container}>
      { 
        isTodoListPickerOpen && <TodoListPicker setTodoListPickerOpen={setTodoListPickerOpen}/>
      }
      <TouchableOpacity onPress={() => setTodoListPickerOpen(!isTodoListPickerOpen)}>
        <View style={styles.todoListsWrapper}>
          <Text style={styles.todoListsLabel}>Todo Lists</Text>
          <AntDesign name="right" size={20} color={variables.colors.lightest_grey} />
        </View>
      </TouchableOpacity>
      {
        todoList && <Text style={styles.projectTitle}>{todoList.projectTitle}</Text>
      }
      {
        todoList && todoList.todos.map(todo => <Todo key={todo._id} priority={todo.priority} text={todo.text} done={todo.done}/>)
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  todoListsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  todoListsLabel: {
    color: variables.colors.lightest_grey,
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 2
  },
  container: {
    flex: 1,
    backgroundColor: variables.colors.dark_grey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 25,
  },
  projectTitle: {
    marginVertical: 15,
    fontSize: 25,
    color: variables.colors.letter_color,
    fontWeight: 'bold'
  }
});

export default Todolist;