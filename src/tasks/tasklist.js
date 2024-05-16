import React from 'react';
import Task from './task';

const TaskList = ({tasks, setTasks}) => {
    return (
        <div className='tasklist'>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Task title={task.title} description={task.description} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;