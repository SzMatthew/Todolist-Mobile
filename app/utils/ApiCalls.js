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
  }
};