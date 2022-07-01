import React from 'react';
import { StyleSheet, View, Text, Platform, FlatList, StatusBar, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import Project from './Project';
import CreateNewListButton from './CreateListButton';
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';
import CreateNewListModal from './CreateNewListModal';


const TodoListPicker = ({swipeableRef}) => {
  const {state: {todoLists}} = useTodoLists();

  return (
    <View style={styles.todoListWrapper}>
      <CreateNewListModal />
        <ScrollView style={styles.scrollView}>
          <View style={styles.todoListLabelWrapper}>
            <Text style={styles.text}>Todo Lists:</Text>
          </View>
          <TouchableOpacity style={styles.closeIcon} onPress={() => swipeableRef.current.close()}>
            <AntDesign name="close" size={30} color={variables.colors.lightest_grey}/>
          </TouchableOpacity>
          {
            todoLists 
            && <FlatList
              data={todoLists}
              renderItem={({ item }) => <Project key={item._id} id={item._id} title={item.title} swipeableRef={swipeableRef}/>}
              keyExtractor={(todoList) => todoList._id}
            />
          }
        </ScrollView>
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
  closeIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 20,
    padding: 3,
  },
  todoListLabelWrapper: {
    display: 'flex',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: variables.colors.mid_grey,
    marginBottom: 15
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: variables.colors.red
  }
});

export default TodoListPicker