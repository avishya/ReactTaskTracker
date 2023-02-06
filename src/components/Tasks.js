import Task from "./Task";

const Tasks = ({ tasks, onDeleteProp, onToggleProp }) => {
  return (
    <>
      {tasks.map((eachTask) => (
        <Task
          key={eachTask.id}
          task={eachTask}
          onDeleteProp={onDeleteProp}
          onToggleProp={onToggleProp}
        />
      ))}
    </>
  );
};

export default Tasks;
