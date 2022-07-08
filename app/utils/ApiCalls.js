import envVariables from '../envVariables';

export default {
  getTodoLists: async (userId = envVariables.USER_ID) => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/projects?userId=${userId}`);

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json(); 
    return data;
  },

  getTodoListById: async (todoListId) => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/todos/getTodosByProjectId?projectId=${todoListId}`);

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json(); 
    return data;
  },

  createTodoList: async (title, userId = envVariables.USER_ID) => {
    const todoList = {
      userId: userId,
      title: title
    };

    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/projects/insertProject`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(todoList)
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json();
    return data;
  },

  createTodo: async (projectId, text, priority) => {
    let todo = {
      projectId: projectId,
      text: text,
      priority: priority,
      done: false
    };

    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/todos`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(todo)
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json();
    return data;
  },

  deleteTodo: async (id) => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json();
    return data;
  },
};