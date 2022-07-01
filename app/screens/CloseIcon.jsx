import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import variables from './styles/Variables';

const CloseIcon = ({onPress}) => {
  return <TouchableOpacity style={styles.closeIcon} onPress={onPress}>
      <AntDesign name="close" size={30} color={variables.colors.lightest_grey}/>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
  closeIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
});

export default CloseIcon