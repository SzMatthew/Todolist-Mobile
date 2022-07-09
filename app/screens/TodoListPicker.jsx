import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Project from './Project';
import CloseIcon from './CloseIcon';
import CreateNewListButton from './CreateNewListButton';
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';
import CreateNewListModal from './CreateNewListModal';
import Loading from './Loading';


const TodoListPicker = ({swipeableRef}) => {
  const {state: {todoLists}} = useTodoLists();

  const TodoLists = () => {
    if (todoLists) {
      return <FlatList
        data={todoLists}
        renderItem={({ item }) => <Project id={item._id} title={item.title} swipeableRef={swipeableRef}/>}
        keyExtractor={(todoList) => todoList._id}
      />;
    } else {
      return <Loading />;
    }
  };

  return (
    <View style={styles.todoListWrapper}>
      <CreateNewListModal />
        <View style={styles.scrollView}>
          <View style={styles.todoListLabelWrapper}>
            <Text style={styles.text}>Todo Lists:</Text>
            <CloseIcon onPress={() => swipeableRef.current.close()}/>
          </View>
          
          <TodoLists />
        </View>
        <CreateNewListButton />
    </View>
  )
}

const styles = StyleSheet.create({
  todoListWrapper: {
    flex: 1,
    backgroundColor: variables.colors.dark_grey,
  },
  scrollView: {
    flex: 1,
  },
  todoListLabelWrapper: {
    display: 'flex',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: variables.colors.mid_grey,
    marginBottom: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: variables.colors.lightest_grey
  }
});

export default TodoListPicker