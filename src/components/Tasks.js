import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((eachTask) => (
        <Task key={eachTask.id} task={eachTask} />
      ))}
    </>
  );
};

export default Tasks;
