import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTodoLists } from '../contexts/todolist-context';
import variables from './styles/Variables';


const CreateNewListModal = () => {
  const {state: { isCreateNewListModalOpen}, setCreateNewListOpen} = useTodoLists();

  return (
    <Modal
      visible={isCreateNewListModalOpen}
    >
      <TouchableOpacity style={styles.closeIcon} onPress={() => setCreateNewListOpen(false)}>
          <AntDesign name="close" size={30} color={variables.colors.lightest_grey}/>
        </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 20,
    padding: 3,
  },
});

export default CreateNewListModal