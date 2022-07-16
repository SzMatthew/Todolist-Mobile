import React, {useEffect, useState} from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';
import variables from './styles/Variables';
import ApiCalls from '../utils/ApiCalls';
import { useTodos } from '../contexts/todo-context';
import ConfirmationModal from './ConfirmationModal';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Todo = ({priority, text, done, id}) => {
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [priorityColor, setPriorityColor] = useState(null);
  const {deleteTodoFromTodoList, setTodoDone} = useTodos();

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

  const deleteTodo = async () => {
    const isSuccess = await ApiCalls.deleteTodo(id);
    
    if (isSuccess) {
      deleteTodoFromTodoList(id);
    }
  };

  const rightSwipeActions = () => {
    return (
      <>
        <ConfirmationModal 
          text='Are you sure you want to delete this TODO?' 
          confirmationFunction={deleteTodo} 
          isOpen={isDeleteConfirmationOpen} 
          setIsOpen={setDeleteConfirmationOpen}
        />
        <TouchableOpacity style={styles.delete} onPress={() => setDeleteConfirmationOpen(true)}>
          <AntDesign name="delete" size={22} color={variables.colors.letter_color} />
        </TouchableOpacity>
      </>
      
    );
  };

  const handleDonePress = () => {
    setTimeout(() => {
      setTodoDone(id);
    }, 300);
    
  };

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      rightThreshold={50}
    >
      <View style={styles.todoWrapper} >
        
        <TouchableOpacity style={styles.iconWrapper} onPress={handleDonePress}>
          <BouncyCheckbox
            onPress={handleDonePress}
            size={26}
            iconStyle={[styles.icon, {borderColor: variables.colors[priorityColor]}]}
            fillColor={variables.colors[priorityColor]}
            bounceFriction={5}
            disableText={true}
          />
        </TouchableOpacity>
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
    padding: 5,
    marginVertical: 2,
    alignItems: 'center',
    flexDirection: 'row'
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
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  icon: {
    width: 26,
    height: 26,
    borderRadius: 7,
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