import { useState } from "react";
import React from "react";

function TaskForm({addTask})
{
const [taskName,setTaskName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload
    if(taskName)
    {
        addTask(taskName); //pass the task name to the addTask function
        setTaskName(''); //Reset the input field
    }

};

return (
<form>
    <input
    type = "text"
    value = {taskName}
    onChange={(e) => setTaskName(e.target.value)}
    placeholder = "Add a new task"
    />
    <button type="submit">Add Task</button>
</form>
);

}

export default TaskForm;