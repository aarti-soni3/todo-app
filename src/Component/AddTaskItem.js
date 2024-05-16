import React, { useState } from 'react'
import { addTodo } from '../StateManagingFiles/Slices/TaskSlice'
import { useDispatch } from 'react-redux';

export default function AddTaskItem(props) {

    const [taskTitle,setTaskTitle] = useState("");
    const [taskDescription,setTaskDescription] = useState("");

    const dispatch = useDispatch();
    const [boardId] = [props.boardId]
    const addNewTask = ()=>{
        const newTask ={
            taskTitle:taskTitle,
            taskDescription:taskDescription,
        }
        dispatch(addTodo({boardId : boardId,task:newTask}));
        props.hideAddTaskItem();
    }

    return (
        <>
            <div className="mb-3">
                <input type="text" value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Task Name" />
                <input type="text" value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Description" />
                <button className="btn btn-primary" onClick={()=>{addNewTask()}} type="button" > Add Task</button>
                <button className="btn btn-dark" onClick={()=>{props.hideAddTaskItem()}} type="button" style={{ backgroundColor:'grey', marginLeft: '8px' }}> <i className="fa-solid fa-close" ></i></button>
            </div>
        </>
    )
}
