import React, { useState } from 'react'
import { updateBoard } from '../StateManagingFiles/Slices/TaskSlice'
import { useDispatch } from 'react-redux';

export default function UpdateBoard(props) {

    const[boardId,title,hideUpdateBoard] = [props.boardId,props.boardTitle,props.hideUpdateBoard];

    const [boardTitle,setBoardTitle] = useState(title);

    const dispatch = useDispatch();
    const updateNewBoard = (boardId)=>{
        const newTitle =boardTitle;
        dispatch(updateBoard({id: boardId,newTitle :newTitle}));
        props.hideUpdateBoard();
    }

    return (
        <>
            <div className="mb-3">
                <input type="text" value={boardTitle} onChange={(e)=>{setBoardTitle(e.target.value)}} className="form-control" style={{ marginBottom: '8px' ,width:'275px' }} id="formGroupExampleInput2" placeholder="Board Name" />
                <button className="btn btn-primary" onClick={()=>{updateNewBoard(boardId)}} type="button" > <i className="fa fa-check" ></i></button>
                <button className="btn btn-dark" onClick={()=>{hideUpdateBoard()}} type="button" style={{ backgroundColor:'grey', marginLeft: '8px' }}> <i className="fa-solid fa-close" ></i></button>
            </div>
        </>
    )
}
