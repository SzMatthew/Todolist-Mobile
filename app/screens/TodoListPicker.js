import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import Project from './Project';
import variables from './styles/Variables';
import { useTodoLists } from '../contexts/todolist-context';
import GestureRecognizer from 'react-native-swipe-gestures';


const TodoListPicker = () => {
  const {state: {todoLists}, setTodoListPickerOpen} = useTodoLists();

  const onSwipeLeft = () => {
    setTodoListPickerOpen(false);
  };

  return (
    <Animated.View style={styles.todoListWrapper} entering={SlideInLeft} exiting={SlideOutLeft}>
      <GestureRecognizer 
        style={{flex: 1}}
        onSwipeLeft={onSwipeLeft}
        config={{
          velocityThreshold: 0.2,
          directionalOffsetThreshold: 70
        }}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.todoListLabelWrapper}>
            <Text style={styles.text}>Todo Lists:</Text>
          </View>
          <TouchableOpacity style={styles.closeIcon} onPress={() => setTodoListPickerOpen(false)}>
            <AntDesign name="close" size={30} color={variables.colors.lightest_grey}/>
          </TouchableOpacity>
          {
            todoLists && todoLists.map(todoList => <Project key={todoList._id} id={todoList._id} title={todoList.title}/>)
          }
        </ScrollView>
      </GestureRecognizer>
    </Animated.View>
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