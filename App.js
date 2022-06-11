import { StatusBar } from 'react-native';
import Todolist from './app/screens/Todolist';
import { TodoListsProvider } from './app/contexts/todolist-context';
import { TodosProvider } from './app/contexts/todo-context';
import variables from './app/screens/styles/Variables';


export default function App() {

  return (
    <TodoListsProvider>
      <TodosProvider>
        <Todolist/>
        <StatusBar backgroundColor={variables.colors.dark_grey} barStyle={'light-content'} />
      </TodosProvider>
    </TodoListsProvider>
  );
}


