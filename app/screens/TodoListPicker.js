import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import variables from './styles/Variables';


const TodoListPicker = ({ setTodoListPickerOpen }) => {
  return (
    <SafeAreaView style={styles.todoListWrapper}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>TodoListPicker</Text>
        <AntDesign style={styles.closeIcon} name="close" size={24} color="white" onPress={() => setTodoListPickerOpen(false)}/>
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
    backgroundColor: 'red',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  text: {
    height: 50,
  }
});

export default TodoListPicker