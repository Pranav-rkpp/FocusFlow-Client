import { FaTrashAlt } from "react-icons/fa";

const SingleTask = (props) => {
  const { tasks, handleCheckboxChange, handleDeleteTask } = props;

  return (
    <div className="single-task">
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleCheckboxChange(task._id)}
            />
            <label
              style={task.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheckboxChange(task.id)}
            >
              {task.name}
            </label>
            <FaTrashAlt onClick={() => handleDeleteTask(task._id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleTask;
