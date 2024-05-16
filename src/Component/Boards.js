import React from 'react'
import Board from './Board'
import { useSelector } from 'react-redux'

export default function Boards() {

    const boards = useSelector((state) => state.task.boards)
    const boardsData = Object.values(boards);
    return (
        <>
            <div className="row row-cols-3 row-cols-sm-5" style={{width:'90rem', marginTop: '30px', marginLeft: '30px' }}>

                {boardsData.map((board )=> (
                    <Board key={board.boardId} boardId={board.boardId} board={board} />
                ))}

            </div>
        </>
    )
}
