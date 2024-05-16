import React from 'react';
import {data} from '../data/data';
import Task from './task';

const TaskList = () => {
    const [tasks, setTasks] = React.useState(data);
    return (
        <div className='tasklist'>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Task title={task.title} description={task.description} />
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                const title = document.querySelector('input[placeholder="Title"]').value;
                const description = document.querySelector('input[placeholder="Description"]').value;
                setTasks([...tasks, {title, description}]);
            }
            }>Add Task</button>
            <button onClick={() => setTasks([])}>Clear Tasks</button>
        </div>
    );
}

export default TaskList;