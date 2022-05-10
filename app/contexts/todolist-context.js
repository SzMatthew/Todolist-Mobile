import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../utils/ApiCalls';

const TodoListsContext = createContext();

const todoListsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOLISTS': {
      return { todoLists: action.payload };
    }
    case 'LOAD_TODOLISTS': {
      return { todoLists: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const TodoListsProvider = props => {
  const [state, dispatch] = useReducer(todoListsReducer, {todoLists: null});
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
    dispatch({type: 'LOAD_TODOLISTS', payload: todoLists});
  };

  return {
      state,
      dispatch,
      setTodoLists,
      loadTodoLists
  };
};

export { useTodoLists, TodoListsProvider };