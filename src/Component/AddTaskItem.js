import React, { useReducer, useState } from "react";
import { addTodo } from "../StateManagingFiles/Slices/TaskSlice";
import { useDispatch } from "react-redux";
import PriorityList from "./PriorityList";

export default function AddTaskItem(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, dispatchPriority] = useReducer(priorityReducer, {
    priority: 0,
  });

  const dispatch = useDispatch();
  const [boardId, hideAddTaskItem] = [props.boardId, props.hideAddTaskItem];
  const addNewTask = () => {
    const newTask = {
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      priority: taskPriority.priority,
    };
    console.log("adding : ",newTask);
    dispatch(addTodo({ boardId: boardId, task: newTask }));
    props.hideAddTaskItem();
  };

  function priorityReducer(state,action) {
    switch (action.type) {
      case "High":
        return { priority: 1 };
      case "Medium":
        return { priority: 2 };
      case "Low":
        return { priority: 3 };
      default:
        return state;
    }
  }

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          className="form-control"
          style={{ marginBottom: "8px" }}
          id="formGroupExampleInput2"
          placeholder="Task Name"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          className="form-control"
          style={{ marginBottom: "8px" }}
          id="formGroupExampleInput2"
          placeholder="Description"
        />

        <div style={{ display: "inline-block" }}>
          <PriorityList
            handleOnHighPriorityClick={() => {
                dispatchPriority({ type: "High" });
                console.log(taskPriority.priority);
            } }
            handleOnMediumPriorityClick={() => {
                dispatchPriority({ type: "Medium" });
                console.log(taskPriority.priority);
            }}
            handleOnLowPriorityClick={() => {
                dispatchPriority({ type: "Low" });
                console.log(taskPriority.priority);
            }}
            priority={taskPriority.priority}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            addNewTask();
          }}
          style={{ display: "inline-block", marginLeft: "40px" }}
          type="button"
        >
          {" "}
          Add Task
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            hideAddTaskItem();
          }}
          type="button"
          style={{
            backgroundColor: "grey",
            marginLeft: "8px",
            display: "inline-block",
          }}
        >
          {" "}
          <i className="fa-solid fa-close"></i>
        </button>
      </div>
    </>
  );
}
