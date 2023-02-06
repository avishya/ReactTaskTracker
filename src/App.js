import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Save Task
  const saveTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log("toggle", id);
    setTasks(
      tasks.map((eachTask) =>
        eachTask.id === id
          ? { ...eachTask, reminder: !eachTask.reminder }
          : eachTask
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onSaveTaskProp={saveTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteProp={deleteTask}
          onToggleProp={toggleReminder}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
