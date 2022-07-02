import React, {useEffect, useState} from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';
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

  const rightSwipeActions = () => {
    return (
      <View style={styles.delete}>
        <AntDesign name="delete" size={22} color={variables.colors.letter_color} />
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      rightThreshold={50}
    >
      <View style={styles.todoWrapper} >
        <View style={[styles.icon, {borderColor: variables.colors[priorityColor]}]}></View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{text}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginVertical: 2,
    alignItems: 'center',
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
    marginRight: 15
  },
  icon: {
    width: 26,
    height: 26,
    borderRadius: 7,
    borderWidth: 2,
    marginVertical: 3
  },
  delete: {
    display: 'flex',
    backgroundColor: variables.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  deleteText: {
    color: variables.colors.letter_color,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Todo;