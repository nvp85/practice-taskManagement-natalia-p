import { useParams, Link } from "react-router-dom";
import { tasks } from "./TaskList";

const TaskDetail = () => {
    const { taskId } = useParams();
    const task = tasks.find(task => task.id == taskId);
    return (
        <>
        {task 
            ? (<div id="task-container">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <Link to="/tasks">Back to the task list</Link>
                </div>) 
            : (<p>No task was found</p>)
        }
        </>
    )
}
export default TaskDetail;