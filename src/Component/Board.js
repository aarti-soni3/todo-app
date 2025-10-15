import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTaskItem from "./AddTaskItem";
import DropDownList from "./DropDownList";
import UpdateBoard from "./UpdateBoard";
import { removeBoard } from "../StateManagingFiles/Slices/TaskSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Board(props) {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const [showAddTaskItem, setShowAddTaskItem] = useState(false);
  const [showUpdateBoard, setShowUpdateBoard] = useState(false);
  const [boardId, board] = [props.boardId, props.board];

  const handleOnDeleteBoard = () => {
    const text = `Are you sure you want to delete the Board: ${board.boardTitle} ? `;
    const result = window.confirm(text);
    if (result) {
      dispatch(removeBoard(boardId));
    }
  };

  return (
    <>
      <div
        className="card rounded border"
        style={{ width: "22rem", marginLeft: "20px", marginBottom: "20px" }}
        data-bs-theme="dark"
      >
        <div
          className="card-body"
          style={{
            scrollbarWidth: "thin",
            height: "500px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <h5
            className="card-title"
            style={{ marginBottom: "25px", width: "320px" }}
          >
            {showUpdateBoard ? (
              <UpdateBoard
                boardId={boardId}
                boardTitle={board.boardTitle}
                hideUpdateBoard={() => {
                  setShowUpdateBoard(false);
                }}
              />
            ) : (
              board.boardTitle
            )}
            <div style={{ position: "relative", top: "-28px", right: "-20px" }}>
              <DropDownList
                handleOnEdit={() => {
                  setShowUpdateBoard(true);
                }}
                handleOnDelete={() => {
                  handleOnDeleteBoard();
                }}
              />
            </div>
          </h5>

          <ul className="list-group" style={{ alignItems: "start" }}>
            {Object.entries(tasks)
              .filter(([taskId]) => board.taskIds.includes(parseInt(taskId)))
              .sort(([, taskA], [, taskB]) => {
                return taskA.isCompleted - taskB.isCompleted;
              })
              .map(([taskId, task]) => (
                <TaskItem
                  key={taskId}
                  taskId={taskId}
                  boardId={boardId}
                  taskTitle={task.taskTitle}
                  taskDescription={task.taskDescription}
                  isCompleted={task.isCompleted}
                  priority={task.priority}
                />
              ))}
          </ul>
          {showAddTaskItem ? (
            <AddTaskItem
              key={boardId}
              boardId={boardId}
              hideAddTaskItem={() => {
                setShowAddTaskItem(false);
              }}
            />
          ) : (
            <div
              className="d-grid col-8 mx"
              style={{
                position: "relative",
                marginLeft: "2.8rem",
                marginBottom: "8px",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowAddTaskItem(true);
                }}
                type="button"
              >
                {" "}
                <i
                  className="fa-solid fa-plus"
                  style={{ marginRight: "8px" }}
                ></i>{" "}
                Add Task
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
