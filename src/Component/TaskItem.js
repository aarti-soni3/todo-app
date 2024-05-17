import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../StateManagingFiles/Slices/TaskSlice';
import UpdateTaskItem from './UpdateTaskItem';
import DropDownList from './DropDownList';

export default function TaskItem(props) {

    const [showUpdateTaskItem, setShowUpdateTaskItem] = useState(false);
    const dispatch = useDispatch();
    const [taskId, taskTitle, taskDescription, isCompleted] = [props.taskId, props.taskTitle, props.taskDescription, props.isCompleted]

    const trimSentence = (sentence, num) => {
        let newSentence = "";
        let count = num;
        if (sentence.length > count) {
            newSentence = sentence.slice(0, count) + "...";
        } else {
            newSentence = sentence;
        }
        return newSentence;
    }

    const handleOnChanged = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleOnDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleOnDeleteTaskItem = () => {
        const text = `Are you sure you want to delete the task: ${taskTitle} ? `;
        const result = window.confirm(text);
        if (result) {
            handleOnDelete(taskId);
        }
    }

    return (
        <>
            {showUpdateTaskItem ? <UpdateTaskItem taskId={taskId} taskTitle={taskTitle} taskDescription={taskDescription} hideUpdateTaskItem={() => { setShowUpdateTaskItem(false) }} />
                : <li className="list-group-item rounded border" style={{ width: '17rem', marginBottom: '10px' }}>
                    <div style={{ width: '12rem' }}>
                        <input className="form-check-input me-2 " type="checkbox" style={{ zIndex: '1' }} checked={isCompleted} id={taskId} onChange={() => { handleOnChanged(taskId) }} />
                        <label className="card-title stretched-link" htmlFor={taskId} style={{ fontSize: '15px', textDecoration: isCompleted ? 'line-through' : 'none' }}>
                            {trimSentence(taskTitle, 15)}
                            <p className="card-text" style={{ textAlign: 'match-parent', color: 'grey', marginBottom: '-10px' }} >{trimSentence(taskDescription, 22)}</p>
                        </label>
                    </div>
                    <DropDownList handleOnEdit={()=>{setShowUpdateTaskItem(true)}} handleOnDelete={()=>{handleOnDeleteTaskItem()}} />
                </li >
            }
        </>
    )
}