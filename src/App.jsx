import AddTask from "./AddTask";
import "./App.css";
// import Concept from "./Concept";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import SearchTask from "./SearchTask";

function App() {
  // const TASKS = JSON.parse(localStorage.getItem("tasks")) || [];

  const API_URL = "http://localhost:3500/task";

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Data Not Received");
      const taskList = await response.json();
      setTasks(taskList);
      setFetchError(null);
    } catch (err) {
      conosle.error(err.stack);
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  // [
  //   { id: 1, name: "Play Cricket", checked: false },
  //   { id: 2, name: "Code", checked: true },
  //   { id: 3, name: "Entertainment", checked: false },
  // ];

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const [searchTask, setSearchTask] = useState("");

  async function AddNewTask(newTask) {
    // const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    // const taskName = newTask;
    // const checked = false;
    // const newTasksList = [...tasks, { id, name: taskName }];
    // setTasks(newTasksList);
    // localStorage.setItem("tasks", JSON.stringify(newTasksList));
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newTask }),
      });
      if (!response.ok) throw Error("Please reload the app");
      fetchAllTasks();
    } catch (err) {
      console.err(err.stack);
      setFetchError(err.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Sumbitted Task");
    AddNewTask(newTask);
    setNewTask("");
  }

  async function handleCheckboxChange(id) {
    // const updatedTasks = tasks.map((task) =>
    //   task.id === id ? { ...task, checked: !task.checked } : task
    // );
    let updatedTask = tasks.find((task) => task._id === id);
    console.log(updatedTask);

    // setTasks(updatedTasks);

    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checked: !updatedTask.checked }),
      });
      if (!response.ok) throw Error("Please reload the app");
      fetchAllTasks();
    } catch (err) {
      console.log(err.stack);
      setFetchError(err.message);
    }
  }

  async function handleDeleteTask(id) {
    // const updatedTasks = tasks.filter((task) => task.id !== id);
    // setTasks(updatedTasks);
    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw Error("Please reload the app");
      fetchAllTasks();
    } catch (err) {
      console.log(err.stack);
      setFetchError(err.message);
    }
  }

  return (
    <div className="app">
      <Header title="FocusFlow" />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <SearchTask searchTask={searchTask} setSearchTask={setSearchTask} />
      {/* <Concept /> */}

      <main>
        {isLoading && <p>Loading Tasks...</p>}
        {fetchError && <p>{`Error : ${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            tasks={tasks.filter((task) =>
              task.name.toLowerCase().includes(searchTask.toLowerCase())
            )}
            // setTasks={setTasks}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteTask={handleDeleteTask}
          />
        )}
      </main>
      <Footer
        length={
          tasks.filter((task) =>
            task.name.toLowerCase().includes(searchTask.toLowerCase())
          ).length
        }
      />
    </div>
  );
}

export default App;
