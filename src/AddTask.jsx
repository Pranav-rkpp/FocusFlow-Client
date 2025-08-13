import { FaPlus } from "react-icons/fa";

const AddTask = (props) => {
  const { newTask, setNewTask, handleSubmit } = props;
  return (
    <div className="add-task">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter Task : </label>
        <input
          type="text"
          placeholder="Add New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddTask;
