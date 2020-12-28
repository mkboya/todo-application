import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    let errorMessage = "";
    if (!taskName) {
      errorMessage = "Please enter the task name!";
    }
    if (!taskDescription) {
      errorMessage = "Please enter the task Description!";
    }
    if (!errorMessage) {
      handleAddTask({ taskName, taskDescription });
      setTaskName("");
      setTaskDescription("");
    } else {
      alert(errorMessage);
    }
  };

  return (
    <div className="form-container">
      <input
        placeholder="Task Name"
        className="custom-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br />
      <textarea
        className="custom-text-area"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <br />
      <button className="add-task-btn" onClick={addTask}>
        ADD TASK
      </button>
    </div>
  );
};

export default AddTask;
