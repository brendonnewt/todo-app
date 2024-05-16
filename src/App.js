import React from 'react';
import HeaderBar from './headerbar';
import TaskList from './tasklist';
import InputPanel from './inputpanel';

export const App = () => {
    return (
        <div className='app'>
            <HeaderBar />
            <TaskList />
            <InputPanel />
        </div>
    );
}