import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../StateManagingFiles/Slices/TaskSlice";

export default function AddBoard(props) {
  const hideAddBoard = props.hideAddBoard;
  const [boardTitle, setBoardTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    dispatch(addBoard(boardTitle));
    hideAddBoard();
  };

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => {
            setBoardTitle(e.target.value);
          }}
          className="form-control"
          style={{ marginBottom: "8px" }}
          id="formGroupExampleInput2"
          placeholder="Board Name"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            handleAddBoard();
          }}
          type="button"
        >
          {" "}
          Add Board
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            hideAddBoard();
          }}
          type="button"
          style={{ backgroundColor: "grey", marginLeft: "8px" }}
        >
          {" "}
          <i className="fa-solid fa-close"></i>
        </button>
      </div>
    </>
  );
}
