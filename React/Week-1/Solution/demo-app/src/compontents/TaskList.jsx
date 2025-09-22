
const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <table>

      <tr style={{ fontWeight:'bold'}}>
        <td>Task</td>
        <td>Category</td>
        <td>Status</td>
        <td>Delete</td>
      </tr>

      {tasks.map((task) => (

        <tr>
          {/* All styles will be passed as object in react in-line styles */}
          <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </td>

          <td>
            <em>{task.category}</em>
          </td>

          <td>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </td>

          <td>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </td>
        </tr>

      ))}
    </table>
  );
};

export default TaskList;
