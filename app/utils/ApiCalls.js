import envVariables from '../envVariables';

export default {
  getTodoLists: async (userId = envVariables.USER_ID) => {
    console.log('ITT');
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/projects?userId=${userId}`);

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const data = await response.json(); 
console.log('data', data);
    return data;
  }
};