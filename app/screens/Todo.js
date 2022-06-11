import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import variables from './styles/Variables';

const Todo = ({priority, text, done}) => {
  const [priorityColor, setPriorityColor] = useState(null);

  useEffect(() => {
    switch(priority) {
      case 1: 
        setPriorityColor('red')
        break;
      case 2:
        setPriorityColor('yellow');
        break;
      case 3:
        setPriorityColor('blue');
        break;
      default:
        setPriorityColor('grey');
        break;
    }
  }, []);

  return (
    <View style={styles.todoWrapper}>
      <View style={[styles.icon, {borderColor: variables.colors[priorityColor]}]}></View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginVertical: 2,
    alignItems: 'center'
  },
  titleWrapper: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  title: {
    flexShrink: 1,
    marginLeft: 10,
    color: variables.colors.letter_color,
    fontWeight: 'bold',
    fontSize: 19,
  },
  icon: {
    width: 26,
    height: 26,
    borderRadius: 7,
    borderWidth: 2,
    marginVertical: 3
  }
});

export default Todo;