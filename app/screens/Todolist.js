import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import variables from './styles/Variables';

const Todolist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.projectTitle}>Project Title</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: variables.colors.dark_grey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  projectTitle: {
    marginVertical: 15,
    fontSize: 25,
    color: variables.colors.letter_color,
    fontWeight: 'bold'
  }
});

export default Todolist;