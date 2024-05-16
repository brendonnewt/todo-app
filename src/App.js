import React from 'react';
import HeaderBar from './headerbar';
import TaskList from './tasklist';

export const App = () => {
    return (
        <div className='app'>
            <HeaderBar />
            <TaskList />
        </div>
    );
}