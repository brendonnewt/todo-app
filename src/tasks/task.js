const Task = ({title, description}) => {
    return (
        <div className="task">
            <h2>{title}</h2>
            <p>{description}</p>
            <button type="button" className="submit">{`\u2713`}</button>
        </div>
    );
}

export default Task;