const ButtonPanel = ({tasks, setTasks}) => {
    const addTask = () => {
        const title = document.querySelector('input[placeholder="Title"]').value;
        const description = document.querySelector('input[placeholder="Description"]').value;
        // Do not add empty tasks
        if (!title || !description) return;
        setTasks([...tasks, {title, description}]);

        // Clear input fields
        document.querySelector('input[placeholder="Title"]').value = '';
        document.querySelector('input[placeholder="Description"]').value = '';
    }
    return (
        <div className='buttonpanel'>
            <button type="button" onClick={() => addTask()}>Add Task</button>
            <button type="button" onClick={() => setTasks([])}>Clear Tasks</button>
        </div>
    );
}

export default ButtonPanel;