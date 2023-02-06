import Task from "./Task";

const Tasks = ({ tasks, onDeleteProp }) => {
  return (
    <>
      {tasks.map((eachTask) => (
        <Task key={eachTask.id} task={eachTask} onDeleteProp={onDeleteProp} />
      ))}
    </>
  );
};

export default Tasks;
