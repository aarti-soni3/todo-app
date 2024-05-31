import React, { useState } from 'react'
import { updateTodo } from '../StateManagingFiles/Slices/TaskSlice'
import { useDispatch } from 'react-redux';

export default function UpdateTaskItem(props) {

    const[taskId,title,description,hideUpdateTaskItem] = [props.taskId,props.taskTitle,props.taskDescription,props.hideUpdateTaskItem];
    const [taskTitle,setTaskTitle] = useState(title);
    const [taskDescription,setTaskDescription] = useState(description);

    const dispatch = useDispatch();
    const updateNewTask = (taskId)=>{
        const title = taskTitle;
        const description = taskDescription;
        const task = [taskId,title,description];
        dispatch(updateTodo(task));
        props.hideUpdateTaskItem();
    }

    return (
        <>
            <div className="mb-3">
                <input type="text" value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Task Name" />
                <input type="text" value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Description" />
                <button className="btn btn-primary" onClick={()=>{updateNewTask(taskId)}} type="button" > Update Task</button>
                <button className="btn btn-dark" onClick={()=>{hideUpdateTaskItem()}} type="button" style={{ backgroundColor:'grey', marginLeft: '8px' }}> <i className="fa-solid fa-close" ></i></button>
            </div>
        </>
    )
}
