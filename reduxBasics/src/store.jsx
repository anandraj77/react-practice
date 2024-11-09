import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

/* eslint-disable no-case-declarations */

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"
const FETCH_TASK = "task/fetch"

const initialState = {
    task: ["initial test data",],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index != action.payload
            })
            return {
                ...state,
                task: updatedTask,
            }
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload]
            }    

        default:
            return state;
    }
}


// Create the Redux store using the reducer
export const store = createStore(taskReducer, applyMiddleware(thunk))
// console.log("initial State: ", store.getState());

// Create action creators
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

// dispatch an action to add a task
// store.dispatch(addTask("First Data"))
// store.dispatch(addTask("second Data"))
// store.dispatch(addTask("third Data"))
// console.log("updated State: ", store.getState());

// store.dispatch(addTask("fourth Data"))
// console.log("updated State: ", store.getState());

// store.dispatch(deleteTask(1))
// console.log("deleted State: ", store.getState());


export const fetchTask = () => {
    return async (dispatch) =>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            const data = await res.json()
            console.log(data);
            
            dispatch({type: FETCH_TASK, payload: data.map((curTask) => {
                return curTask.title
            })})
        } catch (error) {
            console.log(error);
            
        }
    }
}