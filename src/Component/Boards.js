import React, { useState } from 'react'
import Board from './Board'
import { useSelector } from 'react-redux'
import AddBoard from './AddBoard';

export default function Boards() {

    const boards = useSelector((state) => state.task.boards)
    const [showAddBoard, setShowAddBoard] = useState(false);


    const boardsData = Object.entries(boards);
    return (
        <>
            <div className="row row-cols-3 row-cols-sm-5" style={{ width: '90rem', marginTop: '30px', marginLeft: '30px' }}>

                {boardsData.map(([boardId, board]) => {
                    return (
                        <Board key={boardId} boardId={boardId} board={board} />//boardTask={filteredTasks} />
                    )
                })}

                {showAddBoard ? <AddBoard key={Object.values(boards).length + 1} hideAddBoard={() => { setShowAddBoard(false) }} />
                    : <button className="btn btn-primary mx-4" onClick={() => { setShowAddBoard(true) }} type="button" style={{ width: '17rem', height: '2.5rem' }}> <i className="fa-regular fa-rectangle-list" style={{ marginRight: '8px' }}></i> Add Board</button>
                }
            </div>
        </>
    )
}
