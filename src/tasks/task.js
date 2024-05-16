const Task = ({title, description, onRemove}) => {
    return (
        <div className="task">
            <h2>{title}</h2>
            <p>{description}</p>
            <button type="button" className="submit" onClick={onRemove}>{`\u2713`}</button>
        </div>
    );
}

export default Task;