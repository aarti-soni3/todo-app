import React, { useReducer, useState } from "react";
import { updateTodo } from "../StateManagingFiles/Slices/TaskSlice";
import { useDispatch } from "react-redux";
import PriorityList from "./PriorityList";

export default function UpdateTaskItem(props) {
  const [taskId, title, description, priority, hideUpdateTaskItem] = [
    props.taskId,
    props.taskTitle,
    props.taskDescription,
    props.taskPriority,
    props.hideUpdateTaskItem,
  ];
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [priorityState, dispatchPriority] = useReducer(priorityReducer, {priority: priority});

  function priorityReducer(state, action) {
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

  const dispatch = useDispatch();
  const updateNewTask = (taskId) => {
    const title = taskTitle;
    const description = taskDescription;
    const priority = priorityState.priority;
    const task = [taskId, title, description, priority];
    console.log(priority)
    dispatch(updateTodo(task));
    props.hideUpdateTaskItem();
  };

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
              console.log(priorityState.priority);
            }}
            handleOnMediumPriorityClick={() => {
              dispatchPriority({ type: "Medium" });
              console.log(priorityState.priority);
            }}
            handleOnLowPriorityClick={() => {
              dispatchPriority({ type: "Low" });
              console.log(priorityState.priority);
            }}
            priority={priorityState.priority}
          />
        </div>

        <button
          className="btn btn-primary"
          type="button"
          style={{marginLeft:"15px"}}
          onClick={() => {
            updateNewTask(taskId);
          }}
          
        >
          {" "}
          Update Task
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            hideUpdateTaskItem();
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
