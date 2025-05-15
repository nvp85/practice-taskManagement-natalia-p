import { Link } from "react-router-dom";

export const tasks = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Cheese, Eggs" },
    { id: 2, title: "Workout", description: "1-hour cardio at gym" },
    { id: 3, title: "Meeting", description: "Project discussion at 9AM" },
    { id: 4, title: "Pay bills", description: "Electricity and Internet" }
    ];
    
const TaskList = () => {
    return (
        <ol>
            {tasks.map((task) => <li key={task.id}><Link to={`${task.id}`}>{task.title}</Link></li>)}
        </ol>
    )
}

export default TaskList;