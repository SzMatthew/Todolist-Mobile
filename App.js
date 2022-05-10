import { StatusBar } from 'expo-status-bar';
import Todolist from './app/screens/Todolist';
import { TodoListsProvider } from './app/contexts/todolist-context';
import { TodosProvider } from './app/contexts/todo-context';


export default function App() {

  return (
    <TodoListsProvider>
      <TodosProvider>
        <Todolist/>
        <StatusBar style="auto" />
      </TodosProvider>
    </TodoListsProvider>
  );
}


