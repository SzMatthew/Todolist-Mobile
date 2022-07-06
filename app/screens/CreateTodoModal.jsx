import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import CloseIcon from './CloseIcon';
import { Ionicons } from '@expo/vector-icons'; 
import variables from './styles/Variables';

const CreateTodoModal = ({isOpen, setIsOpen}) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(3);

  const isPriorityIsActive = (checkPriority) => {
    if (checkPriority === priority) {
      return {
        backgroundColor: 'rgba(110, 110, 110, 0.5)',
      };
    }
    return null;
  };

  return (
    <Modal
      animationType="slide"
      visible={isOpen}
    >
      <View style={styles.backGround}>
        <View style={styles.modalView}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Add TODO</Text>
            <CloseIcon onPress={() => setIsOpen(false)}/>
          </View>
          <Text style={styles.inputText}>Title:</Text>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={setText}
            autoFocus={true}
          />
          <Text style={styles.inputText}>Priority:</Text>
          <View style={styles.priorityWrapper}>
            <Ionicons name="flag" size={27} color={variables.colors.red} style={[isPriorityIsActive(1), styles.priority]} onPress={() => setPriority(1)} />
            <Ionicons name="flag" size={27} color={variables.colors.yellow} style={[isPriorityIsActive(2), styles.priority]} onPress={() => setPriority(2)}/>
            <Ionicons name="flag" size={27} color={variables.colors.blue} style={[isPriorityIsActive(3), styles.priority]} onPress={() => setPriority(3)}/>
            <Ionicons name="flag" size={27} color={variables.colors.grey} style={[isPriorityIsActive(4), styles.priority]} onPress={() => setPriority(4)}/>
          </View>
          <TouchableOpacity 
            style={styles.addButton}
          >
            <Text style={styles.addTodoText}>Add TODO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  backGround: {
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: variables.colors.lightest_grey,
    fontSize: 25,
  },
  inputText: {
    color: variables.colors.letter_color,
    fontSize: 22,
    marginTop: 10
  },
  textInput: {
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
  priorityWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  priority: {
    padding: 7,
    marginHorizontal: 3,
    borderRadius: 6
  },
  addButton: {
    backgroundColor: variables.colors.red,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  addTodoText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: variables.colors.letter_color
  }
});

export default CreateTodoModal;