import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import {getLocalStorageTodoData, setLocalStorageTodoData} from './TodoLocalStorage'


export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData())

    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue

        // to check if the input field is empty or not
        if (!content) return
        // to check if data is already existing or not
        // if (task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    // to add data to localStorage
    setLocalStorageTodoData(task)

    // handle Delete
    const handleDelete = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask)
    }

    // handle Clear All Element
    const handleClearAll = () => {
        setTask([])
    }

    // handle Complete Task Tick
    const handleChecked = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask
            }
        })
        setTask(updatedTask)
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List with LocalStorage</h1>
                <TodoDateTime />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDelete}
                                    onHandleChecked={handleChecked} />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    )
}

