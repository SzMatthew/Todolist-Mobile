import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../utils/ApiCalls';

const TodoListsContext = createContext();

const todoListsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOLISTS': {
      return { 
        todoLists: action.payload,
        isCreateNewListModalOpen: state.isCreateNewListModalOpen
      };
    }
    case 'SET_CREATE_NEW_LIST_MODAL_OPEN': {
      return {
        todoLists: state.todoLists,
        isCreateNewListModalOpen: action.payload
      };
    }
    case 'CREATE_TODOLIST': {
      return {
        todoLists: [...state.todoLists, action.payload],
        isCreateNewListModalOpen: state.isCreateNewListModalOpen
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const TodoListsProvider = props => {
  const [state, dispatch] = useReducer(todoListsReducer, {todoLists: null, isCreateNewListModalOpen: false});
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

  const setCreateNewListOpen = (isOpen) => {
    dispatch({type: 'SET_CREATE_NEW_LIST_MODAL_OPEN', payload: isOpen});
  };

  const createTodoList = async (todoList) => {
    const responseTodoList = await ApiCalls.createTodoList(todoList);
    dispatch({type: 'CREATE_TODOLIST', payload: responseTodoList});
  };

  return {
      state,
      dispatch,
      setTodoLists,
      loadTodoLists,
      setCreateNewListOpen,
      createTodoList
  };
};

export { useTodoLists, TodoListsProvider };