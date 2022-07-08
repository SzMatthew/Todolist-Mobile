import React from 'react';
import { Modal, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import variables from './styles/Variables';

const ConfirmationModal = ({text, confirmationFunction, isOpen, setIsOpen}) => {
  return (
    <Modal
      animationType="slide"
      visible={isOpen}
    >
      <View style={styles.backGround}>
        <View style={styles.modalView}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity 
              style={[{backgroundColor: variables.colors.red}, styles.button]} 
              onPress={confirmationFunction}
            >
              <Text style={[{color: variables.colors.dark_grey}, styles.buttonText]}>Yes</Text>
            </TouchableOpacity>
            <View style={styles.spacer}></View>
            <TouchableOpacity 
              style={[{backgroundColor: variables.colors.dark_grey}, styles.button]}
              onPress={() => setIsOpen(false)}
            >
              <Text style={[{color: variables.colors.lightest_grey}, styles.buttonText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

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
    borderRadius: 20,
    width: '80%'
  },
  text: {
    color: variables.colors.letter_color,
    fontSize: 25,
    textAlign: 'justify'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  spacer: {
    flex: 1
  },
  button: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ConfirmationModal