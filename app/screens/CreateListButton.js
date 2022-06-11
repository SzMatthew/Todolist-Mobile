import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import variables from './styles/Variables';

const CreateListButton = () => {
  return (
    <TouchableOpacity style={styles.buttonWrapper}>
      <Text style={styles.text}>Create New List</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: variables.colors.red,
    borderRadius: 15,
    margin: 20
  },
  text: {
    margin: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: variables.colors.dark_grey
  }
});
export default CreateListButton