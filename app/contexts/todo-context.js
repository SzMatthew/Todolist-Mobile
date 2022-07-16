import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../utils/ApiCalls';

const TodosContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOLIST': {
      return { todoList: action.payload };
    }
    case 'ADD_TODO_TO_TODOLIST': {
      return {
        todoList: {
          projectId: state.todoList.projectId,
          projectTitle: state.todoList.projectTitle,
          todos: [...state.todoList.todos, action.payload].sort((firstTodo, secondTodo) => (firstTodo.priority >= secondTodo.priority) ? 1 : -1)
        }
      };
    }
    case 'REMOVE_TODO_FROM_TODOLIST': {
      state.todoList.todos.forEach((item, index) => {
        if (item._id === action.payload) {
          state.todoList.todos.splice(index, 1);
          return;
        }
      });

      return {
        todoList: {
          projectId: state.todoList.projectId,
          projectTitle: state.todoList.projectTitle,
          todos: state.todoList.todos.sort((firstTodo, secondTodo) => (firstTodo.priority >= secondTodo.priority) ? 1 : -1)
        }
      }
    }
    case 'SET_TODO_DONE': {
      state.todoList.todos.map((todo) => {
        if (todo._id === action.payload) {
          todo.done = true;
          return;
        }
      });

      return {
        todoList: {
          projectId: state.todoList.projectId,
          projectTitle: state.todoList.projectTitle,
          todos: state.todoList.todos.sort((firstTodo, secondTodo) => (firstTodo.priority >= secondTodo.priority) ? 1 : -1)
        }
      };
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

  const setTodoList = (todoList) => {
    dispatch({type: 'SET_TODOLIST', payload: todoList});
  };

  const loadTodoListById = async (todoListId) => {
    const todoList = await ApiCalls.getTodoListById(todoListId);
    todoList.todos = [...todoList.todos].sort((firstTodo, secondTodo) => (firstTodo.priority >= secondTodo.priority) ? 1 : -1);
    dispatch({type: 'SET_TODOLIST', payload: todoList});
  };

  const appendTodoToTodoList = (todo) => {
    dispatch({type: 'ADD_TODO_TO_TODOLIST', payload: todo});
  };

  const deleteTodoFromTodoList = (id) => {
    dispatch({type: 'REMOVE_TODO_FROM_TODOLIST', payload: id});
  };

  const setTodoDone = async (id) => {
    let todoToUpdate = null;

    state.todoList.todos.map((todo) => {
      if (todo._id === id) {
        todoToUpdate = todo;
        todo.done = true;
        return;
      }
    });

    const updatedTodo = await ApiCalls.updateTodo(todoToUpdate);
    if (updatedTodo._id) {
      dispatch({type: 'SET_TODO_DONE', payload: id});
    }else {
      console.err('Couldn\'t update Todo!');
    }
  };

  return {
      state,
      dispatch,
      setTodoList,
      loadTodoListById,
      appendTodoToTodoList,
      deleteTodoFromTodoList,
      setTodoDone
  };
};

export { useTodos, TodosProvider };