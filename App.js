import { StatusBar } from 'expo-status-bar';
import Todolist from './app/screens/Todolist';
import { TodoListsProvider } from './app/contexts/todolist-context';


export default function App() {

  return (
    <TodoListsProvider>
      <Todolist/>
      <StatusBar style="auto" />
    </TodoListsProvider>
  );
}


