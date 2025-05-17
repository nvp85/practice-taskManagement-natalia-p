import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css';
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p><Link to="/tasks">To the task list</Link></p>} />
        <Route path="tasks" element={ <TaskList /> } />
        <Route path="tasks/:taskId" element={ <TaskDetail /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
