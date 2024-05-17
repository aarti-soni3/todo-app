import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../StateManagingFiles/Slices/TaskSlice';
import UpdateTaskItem from './UpdateTaskItem';
import DropDownItem from './DropDownItem';

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
                    <div className="dropdown" style={{ zIndex: '2', top: '10%', right: '10%', position: 'absolute', marginLeft: '8px' }}>
                        <button className="btn toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <ul className="dropdown-menu" >
                            <DropDownItem icon="fa-solid fa-edit" actionName="Edit" action={() => { setShowUpdateTaskItem(true) }} />
                            <DropDownItem icon="fa-solid fa-trash" actionName="Delete" action={() => { handleOnDeleteTaskItem() }} />
                        </ul>
                    </div>
                </li >
            }
        </>
    )
}