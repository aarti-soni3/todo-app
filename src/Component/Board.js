import React, { useState } from 'react'
import TaskItem from './TaskItem'
import AddTaskItem from './AddTaskItem'

export default function Board(props) {

    const [showAddTaskItem, setShowAddTaskItem] = useState(false);
    const [boardId, boardTitle, taskItems] = [props.board.boardId, props.board.boardTitle, props.board.taskItems];
    const taskItemsData = Object.values(taskItems);

    return (
        <>
            <div className="card rounded border" style={{ width: '22rem', marginLeft: '20px' }} data-bs-theme="dark">
                <div className="card-body" style={{ scrollbarWidth: 'thin', height: '500px', overflowY: 'auto', overflowX: 'hidden' }}>
                    <h5 className="card-title" style={{ marginBottom: '25px' }}>{boardTitle}</h5>
                    <ul className="list-group" style={{ alignItems: 'start' }}>
                        {/* {console.log(`taskid : ${taskItemsData.map((taskItem)=>(taskItem.taskId))}`)} */}
                        {taskItemsData.map((taskItem) => (
                            <TaskItem key={taskItem.taskId} taskId={taskItem.taskId} taskTitle={taskItem.taskTitle} taskDescription={taskItem.taskDescription} isCompleted={taskItem.isCompleted} />
                        ))}
                    </ul>
                    {showAddTaskItem ? <AddTaskItem boardId={boardId}  hideAddTaskItem={()=>{setShowAddTaskItem(false)}}/> : <div className="d-grid col-8 mx" style={{ position: 'relative', marginLeft: '2.8rem', marginBottom: '8px' }}>
                        <button className="btn btn-primary" onClick={()=>{setShowAddTaskItem(true)}} type="button"> <i className="fa-solid fa-plus" style={{ marginRight: '8px' }}></i> Add Task</button>
                    </div>}

                </div>
            </div>
        </>
    )
}
