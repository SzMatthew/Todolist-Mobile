import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import CreateTodoModal from './CreateTodoModal';
import variables from './styles/Variables';

const CreateTodoButton = () => {
  const [isCreateTodoModalOpen, setCreateTodoModalOpen] = useState(false);

  return (
    <>
      <CreateTodoModal isOpen={isCreateTodoModalOpen} setIsOpen={setCreateTodoModalOpen}/>
      <TouchableOpacity style={styles.wrapper} onPress={() => setCreateTodoModalOpen(true)}>
        <Entypo name="plus" size={40} color={variables.colors.letter_color} />
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: variables.colors.red,
    padding: 7,
    borderRadius: 30,
    marginBottom: 25,
    marginRight: 20
  }
});

export default CreateTodoButton;