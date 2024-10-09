import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleChecked }) => {


    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "nonCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onHandleChecked(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}

