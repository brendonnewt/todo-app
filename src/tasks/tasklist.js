import React from 'react';
import Task from './task';

const TaskList = ({tasks, setTasks}) => {
    const removeTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    }

    return (
        <div className='tasklist'>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Task title={task.title} description={task.description} onRemove={() => removeTask(index)}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;