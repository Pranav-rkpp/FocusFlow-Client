import SingleTask from "./SingleTask";

const Content = (props) => {
  // const TASKS = [
  //   { id: 1, name: "Play Cricket", checked: false },
  //   { id: 2, name: "Code", checked: true },
  //   { id: 3, name: "Entertainment", checked: false },
  // ];

  // const [tasks, setTasks] = useState(TASKS);

  // function handleCheckboxChange(id) {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, checked: !task.checked } : task
  //   );

  //   setTasks(updatedTasks);
  // }

  // function handleDeleteTask(id) {
  //   const updatedTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(updatedTasks);
  // }

  const { tasks, handleCheckboxChange, handleDeleteTask } = props;

  return (
    <>
      {tasks.length === 0 ? (
        <h1>No Task Found</h1>
      ) : (
        <SingleTask
          tasks={tasks}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </>
  );
};

export default Content;
