import TaskItem from "./TaskItem";

function List({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default List;