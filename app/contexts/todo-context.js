import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../utils/ApiCalls';

const TodosContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOLIST': {
      return { todoList: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const TodosProvider = props => {
  const [state, dispatch] = useReducer(todosReducer, {todoList: null});
  const value = useMemo(() => [state, dispatch], [state]);
  return <TodosContext.Provider value={value} {...props} />;
};

const useTodos = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }
  const [state, dispatch] = context;

  const setTodos = todos => {
    if (state.todos !== todos) {
      dispatch({type: 'SET_TODOS', payload: todos});
    }
  };

  const loadTodoListById = async (todoListId) => {
    const todoList = await ApiCalls.getTodoListById(todoListId);
    todoList.todos = [...todoList.todos].sort((firstTodo, secondTodo) => (firstTodo.priority >= secondTodo.priority) ? 1 : -1);
    dispatch({type: 'SET_TODOLIST', payload: todoList});
  };

  return {
      state,
      dispatch,
      setTodos,
      loadTodoListById
  };
};

export { useTodos, TodosProvider };