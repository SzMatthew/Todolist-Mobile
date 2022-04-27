import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Todo from './Todo';
import TodoListPicker from './TodoListPicker';
import variables from './styles/Variables';

const Todolist = () => {
  const [isTodoListPickerOpen, setTodoListPickerOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      { isTodoListPickerOpen && <TodoListPicker setTodoListPickerOpen={setTodoListPickerOpen}/> }
      <TouchableOpacity onPress={() => setTodoListPickerOpen(!isTodoListPickerOpen)}>
        <View style={styles.todoListsWrapper}>
          <Text style={styles.todoListsLabel}>Todo Lists</Text>
          <AntDesign name="right" size={20} color={variables.colors.lightest_grey} />
        </View>
      </TouchableOpacity>
      <Text style={styles.projectTitle}>Project Title</Text>
      <Todo/>
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