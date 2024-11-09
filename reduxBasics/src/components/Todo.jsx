import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addTask, deleteTask, fetchTask } from "../store";

export const Todo = () => {

    const [task, setTask] = useState("")

    const tasks = useSelector((state) => state.task)
    // console.log("selector state: ", state.task);

    const dispatch = useDispatch();
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task))
        return setTask("")
    }

    const handleDelete = (index) => {
        dispatch(deleteTask(index))
    }

    const handleFetchTask = () => {
        dispatch(fetchTask())
    }

    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-solid fa-pen-to-square"></i>To-do List:
                </h1>
                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" id='input-box' placeholder='Add a new task' 
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button className="task-btn add-btn">Add Task</button>
                    </form>
                </div>

                <button className="task-btn fetch-btn" onClick={handleFetchTask}>Fetch Tasks</button>

                <ul id='list-container'>
                    {
                        tasks.map((curTask, index) => {
                            return(
                                <li key={index}>
                                    <p>{index}: {curTask}</p>
                                    <button className="delete-button" onClick={() => handleDelete(index)}><i className="fa-solid fa-trash-can"></i></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
