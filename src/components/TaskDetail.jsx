import { useParams } from "react-router-dom";
import { tasks } from "./TaskList";

const TaskDetail = () => {
    const { taskId } = useParams();
    console.log(tasks);
    console.log(taskId);

    return (
        <div id="task-container">
            <h3>{tasks[taskId].title}</h3>
            <p>{tasks[taskId].description}</p>
        </div>
    )
}
export default TaskDetail;