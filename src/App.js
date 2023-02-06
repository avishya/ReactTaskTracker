import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };

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
      <Header
        onClickAddTask={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onSaveTaskProp={saveTask} />}
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
