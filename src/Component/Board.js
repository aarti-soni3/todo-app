import React from 'react'
import TaskItem from './TaskItem'
import AddTaskItem from './AddTaskItem'

export default function Board() {
    return (
        <>
            <div class="card rounded border" style={{ marginLeft: '20px' }} data-bs-theme="dark">
                <div class="card-body" >
                    <h5 class="card-title" style={{ marginBottom: '25px' }}>Card title</h5>
                    <ul class="list-group" style={{ alignItems: 'start' }}>
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                    </ul>

                </div>
                <AddTaskItem />
                <div class="d-grid col-8 mx" style={{ position: 'relative', marginLeft: '2.8rem', marginBottom: '8px' }}>
                    <button class="btn btn-primary" type="button"> <i class="fa-solid fa-plus" style={{ marginRight: '8px' }}></i> Add Task</button>
                </div>
            </div>
        </>
    )
}
