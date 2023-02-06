const AddTask = () => {
  return (
    <form>
      <div>
        <label>Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div>
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
