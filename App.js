import { StatusBar } from 'expo-status-bar';
import Login from './app/screens/Login';
import Todolist from './app/screens/Todolist';

export default function App() {
  return (
    <>
      <Todolist/>
      <StatusBar style="auto" />
    </>
  );
}


