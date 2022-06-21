import React, { useState, useRef, useEffect } from 'react';
import { Keyboard, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTodoLists } from '../contexts/todolist-context';
import variables from './styles/Variables';


const CreateNewListModal = () => {
  const {state: { isCreateNewListModalOpen}, setCreateNewListOpen} = useTodoLists();
  const [newListName, setNewListName] = useState('');

  const handleAddNewList = () => {
    setCreateNewListOpen(false);
    valiadteNewListName();
  }

  const valiadteNewListName = () => {
    if (newListName.length === 0) {
      console.log('NEM JOOo');
    }
  }

  return (
    <Modal
      animationType="slide"
      visible={isCreateNewListModalOpen}
      transparent={true}
    >
      <View style={styles.modalBackGround}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeIcon} onPress={() => setCreateNewListOpen(false)}>
            <AntDesign name="close" size={30} color={variables.colors.lightest_grey}/>
          </TouchableOpacity>
          <Text style={styles.text}>New List:</Text>
          <TextInput
            style={styles.input}
            value={newListName}
            onChangeText={setNewListName}
            autoFocus={true}
          />
          <TouchableOpacity 
            style={styles.addNewListButton}
            onPress={handleAddNewList}
          >
            <Text style={styles.addNewText}>Add New List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.dark_grey
  },
  modalView: {
    position: 'relative',
    padding: 20,
    backgroundColor: variables.colors.mid_grey,
    borderRadius: 20
  },
  closeIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 10,
    padding: 3,
  },
  text: {
    color: variables.colors.letter_color,
    fontWeight: 'bold',
    fontSize: 22,
    width: 150,
  },
  input: {
    width: 250,
    borderColor: variables.colors.lightest_grey,
    color: variables.colors.letter_color,
    backgroundColor: variables.colors.dark_grey,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10
  },
  addNewListButton: {
    backgroundColor: variables.colors.red,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  addNewText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: variables.colors.letter_color
  }
});

export default CreateNewListModal