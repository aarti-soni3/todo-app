import React from 'react'

export default function AddTaskItem() {
    return (
        <>
            <div class="mb-3">
                <input type="text" class="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Task Name" />
                <input type="text" class="form-control" style={{ marginBottom: '8px' }} id="formGroupExampleInput2" placeholder="Description" />
                <button class="btn btn-primary" type="button" style={{position:'relative',marginLeft:'5.8rem'}}> Add Task</button>
            </div>
        </>
    )
}
