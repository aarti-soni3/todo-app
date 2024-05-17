import React, { useState } from 'react'
import TaskItem from './TaskItem'
import AddTaskItem from './AddTaskItem'
import DropDownList from './DropDownList';
import UpdateBoard from './UpdateBoard';
import { removeBoard } from '../StateManagingFiles/Slices/TaskSlice';
import { useDispatch } from 'react-redux';

export default function Board(props) {
    const dispatch = useDispatch();
    const [showAddTaskItem, setShowAddTaskItem] = useState(false);
    const [showUpdateBoard, setShowUpdateBoard] = useState(false);
    const [boardId, boardTitle, taskItems] = [props.board.boardId, props.board.boardTitle, props.board.taskItems];
    const taskItemsData = Object.values(taskItems);

    const handleOnDeleteBoard = () => {
        const text = `Are you sure you want to delete the Board: ${boardTitle} ? `;
        const result = window.confirm(text);
        if (result) {
            dispatch(removeBoard(boardId))
        }
    }

    return (
        <>
            <div className="card rounded border" style={{ width: '22rem', marginLeft: '20px', marginBottom: '20px' }} data-bs-theme="dark">
                <div className="card-body" style={{ scrollbarWidth: 'thin', height: '500px', overflowY: 'auto', overflowX: 'hidden' }}>
                    <h5 className="card-title" style={{ marginBottom: '25px', width: '320px' }}>
                        {showUpdateBoard ? <UpdateBoard boardId={boardId} boardTitle={boardTitle} hideUpdateBoard={() => { setShowUpdateBoard(false) }} /> : boardTitle}
                        <div style={{ position: 'relative', top: '-28px', right: '-20px' }}>
                            <DropDownList handleOnEdit={() => { setShowUpdateBoard(true) }} handleOnDelete={() => { handleOnDeleteBoard() }} /></div>
                    </h5>

                    <ul className="list-group" style={{ alignItems: 'start' }}>
                        {taskItemsData.map((taskItem) => (
                            <TaskItem key={taskItem.taskId} taskId={taskItem.taskId} taskTitle={taskItem.taskTitle} taskDescription={taskItem.taskDescription} isCompleted={taskItem.isCompleted} />
                        ))}
                    </ul>
                    {showAddTaskItem ? <AddTaskItem boardId={boardId} hideAddTaskItem={() => { setShowAddTaskItem(false) }} /> : <div className="d-grid col-8 mx" style={{ position: 'relative', marginLeft: '2.8rem', marginBottom: '8px' }}>
                        <button className="btn btn-primary" onClick={() => { setShowAddTaskItem(true) }} type="button"> <i className="fa-solid fa-plus" style={{ marginRight: '8px' }}></i> Add Task</button>
                    </div>}

                </div>
            </div>
        </>
    )
}
