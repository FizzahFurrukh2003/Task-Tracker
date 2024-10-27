import React from "react";
import Task from "./Task";

function TaskList ({tasks}){
    return (
        <ul>
            {tasks.map((task,index) => (
                <Task key= {index} taskName={task} />
            ))}
        </ul>
    );
}

export default TaskList