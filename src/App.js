import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TaskList from './components/Tasklist';
import TaskForm from './components/Taskform';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = "My Task Tracker"; // Change this to your desired title
  }, []);

  const addTask = (taskName) => {
    setTasks([...tasks,taskName]);//Add new task to the list 
  }

  return (
    <div className="App">
      <h1>My Task Tracker</h1>
      <TaskForm addTask={tasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
