import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useTodoLists } from '../contexts/todolist-context';
import variables from './styles/Variables';
import CloseIcon from './CloseIcon';


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
          <View style={styles.headerWrapper}>
            <Text style={styles.text}>New TodoList:</Text>
            <CloseIcon onPress={() => setCreateNewListOpen(false)} />
          </View>
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
    paddingTop: 15,
    backgroundColor: variables.colors.mid_grey,
    borderRadius: 20
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
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
    paddingHorizontal: 20,
    marginVertical: 10
  },
  addNewListButton: {
    backgroundColor: variables.colors.red,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  addNewText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: variables.colors.letter_color
  }
});

export default CreateNewListModal