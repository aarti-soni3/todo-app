import React from 'react'

export default function TaskItem() {
    return (
        <>
            <li class="list-group-item rounded border" style={{ width: '15.8rem', marginBottom: '10px' }}>
                <input class="form-check-input me-2" type="checkbox" value="" id="firstCheckboxStretched" />
                <label class="card-title stretched-link" for="firstCheckboxStretched">Task Item Title
                    <p class="card-text" style={{ textAlign: 'match-parent' ,color:'grey',marginBottom:'-10px' }} >Description Description...</p>
                </label>
            </li>
        </>
    )
}