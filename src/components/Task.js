import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteProp, onToggleProp }) => {
  return (
    <div className="task" onDoubleClick={() => onToggleProp(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDeleteProp(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
