const ButtonPanel = ({tasks, setTasks}) => {
    return (
        <div className='buttonpanel'>
            <button type="button" onClick={() => {
                const title = document.querySelector('input[placeholder="Title"]').value;
                const description = document.querySelector('input[placeholder="Description"]').value;
                setTasks([...tasks, {title, description}]);
            }
            }>Add Task</button>
            <button type="button" onClick={() => setTasks([])}>Clear Tasks</button>
        </div>
    );
}

export default ButtonPanel;