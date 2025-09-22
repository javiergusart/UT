import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <hr />
      <TaskForm addTask={addTask} />
      <hr />
      <CategoryFilter tasks={tasks} setFilter={setFilter} />
      <hr />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
