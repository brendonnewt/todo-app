const Task = ({title, description}) => {
    return (
        <div className="task">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Task;