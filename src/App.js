import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import ImgPlus from "./assets/plus.png";
import ImgMinus from "./assets/minus.png";
import v4 from "uuid/dist/v4";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTask = ({ taskName, taskDescription }) => {
    try {
      let previousTasks = localStorage.getItem("tasks");
      previousTasks = previousTasks ? JSON.parse(previousTasks) : [];
      previousTasks.push({
        id: v4(),
        taskName,
        taskDescription,
        isCompleted: false
      });
      setTasks(previousTasks);
      localStorage.setItem("tasks", JSON.stringify(previousTasks));
      setIsFormOpen(false)
    } catch (error) { }
  };

  useEffect(() => {
    let currentTasks = localStorage.getItem("tasks");
    currentTasks = currentTasks ? JSON.parse(currentTasks) : [];
    setTasks(currentTasks);
  }, []);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleStatus = (id) => () => {
    const clonedTasks = JSON.parse(JSON.stringify(tasks))
    const matchedItem = clonedTasks.find(x => x.id === id);
    matchedItem.isCompleted = !matchedItem.isCompleted;
    setTasks(clonedTasks)
    localStorage.setItem("tasks", JSON.stringify(clonedTasks));
  }

  const deleteTask = (id) => () => {
    const filteredTasks = tasks.filter(x => x.id !== id);
    setTasks(filteredTasks)
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  return (
    <div className="App">
      <div className="header-container">
        <h2>Todo List</h2>
        <img
          src={isFormOpen ? ImgMinus : ImgPlus}
          className="form-toggler"
          alt="form-toggler-button"
          onClick={toggleForm}
        />
      </div>
      {isFormOpen && <AddTask handleAddTask={handleAddTask} />}
      <div className="tasks-container">
        {tasks.map((item, index) => {
          return <TaskCard {...item} index={index} toggleStatus={toggleStatus}
            deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
