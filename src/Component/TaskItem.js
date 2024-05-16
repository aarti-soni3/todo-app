import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleTodo } from '../StateManagingFiles/Slices/TaskSlice';

export default function TaskItem(props) {

    const dispatch = useDispatch(); 
    const [taskId, taskTitle, taskDescription, isCompleted] = [props.taskId, props.taskTitle, props.taskDescription, props.isCompleted]

    const ShowDescription = (description) => {
        let newDescription = "";
        let count = 25;
        if (description.length > count) {
            newDescription = description.slice(0, count) + "...";
        }else{
            newDescription= description;
        }
        return newDescription;
    }

    const handleOnChanged = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <>
            <li className="list-group-item rounded border" style={{ width: '15.8rem', marginBottom: '10px' }}>
                <input className="form-check-input me-2" type="checkbox" checked={isCompleted} id={taskId} onChange={() => { handleOnChanged(taskId) }} />
                <label className="card-title stretched-link" htmlFor={taskId} style={{ fontSize: '15px' ,textDecoration : isCompleted? 'line-through' : 'none'}}>{taskTitle}
                    <p className="card-text" style={{ textAlign: 'match-parent', color: 'grey', marginBottom: '-10px' }} >{ShowDescription(taskDescription)}</p>
                </label>
            </li>
        </>
    )
}