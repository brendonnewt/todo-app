import React from 'react';
import {data} from './data';

const TaskList = () => {
    const [tasks, setTasks] = React.useState(data);
    return (
        <div className='tasklist'>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
            <input type='text' placeholder='Title' />
            <input type='text' placeholder='Description' />
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