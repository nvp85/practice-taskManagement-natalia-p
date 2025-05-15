import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="tasks" element={ <TaskList /> } />
        <Route path="tasks/:taskId" element={ <TaskDetail /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
