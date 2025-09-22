import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) {
      alert("None of the input fields should be empty. \nKindly fill both input fileds")
      return;
    }
    addTask({ id: Date.now(), text, category, completed: false });
    setText('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category (e.g. Work, Home)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add Task</button>
      
    </form>
  );
};

export default TaskForm;
