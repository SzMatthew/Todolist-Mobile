import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../utils/ApiCalls';

const TodoListsContext = createContext();

const todoListsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOLISTS': {
      return { 
        todoLists: action.payload,
        isTodoListPickerOpen: state.isTodolistPickerOpen,
        isCreateNewListModalOpen: state.isCreateNewListModalOpen
      };
    }
    case 'SET_TODOLIST_PICKER_OPEN': {
      return { 
        todoLists: state.todoLists,
        isTodoListPickerOpen: action.payload,
        isCreateNewListModalOpen: state.isCreateNewListModalOpen
      };
    }
    case 'SET_CREATE_NEW_LIST_MODAL_OPEN': {
      return {
        todoLists: state.todoLists,
        isTodoListPickerOpen: state.isTodoListPickerOpen,
        isCreateNewListModalOpen: action.payload
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const TodoListsProvider = props => {
  const [state, dispatch] = useReducer(todoListsReducer, {todoLists: null, isTodoListPickerOpen: false, isCreateNewListModalOpen: false});
  const value = useMemo(() => [state, dispatch], [state]);
  return <TodoListsContext.Provider value={value} {...props} />;
};

const useTodoLists = () => {
  const context = useContext(TodoListsContext);

  if (!context) {
    throw new Error('useTodoList must be used within a TodoListProvider');
  }
  const [state, dispatch] = context;

  const setTodoLists = todoLists => {
    if (state.todoList !== todoLists) {
      dispatch({type: 'SET_TODOLISTS', payload: todoLists});
    }
  };

  const loadTodoLists = async () => {
    const todoLists = await ApiCalls.getTodoLists();
    dispatch({type: 'SET_TODOLISTS', payload: todoLists});
  };

  const setTodoListPickerOpen = (isOpen) => {
    dispatch({type: 'SET_TODOLIST_PICKER_OPEN', payload: isOpen});
  };

  const setCreateNewListOpen = (isOpen) => {
    dispatch({type: 'SET_CREATE_NEW_LIST_MODAL_OPEN', payload: isOpen});
  };

  return {
      state,
      dispatch,
      setTodoLists,
      loadTodoLists,
      setTodoListPickerOpen,
      setCreateNewListOpen
  };
};

export { useTodoLists, TodoListsProvider };