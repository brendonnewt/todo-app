import React from 'react';
import HeaderBar from './headerbar';
import TaskList from './tasks/tasklist';
import InputPanel from './inputpanel';
import ButtonPanel from './buttonpanel';
import {data} from './data/data';

export const App = () => {
    const [tasks, setTasks] = React.useState(data);
    return (
        <div className='app'>
            <HeaderBar />
            <TaskList tasks={tasks} setTasks={setTasks}/>
            <InputPanel />
            <ButtonPanel tasks={tasks} setTasks={setTasks} />
        </div>
    );
}