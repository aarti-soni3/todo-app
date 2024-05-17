import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../OtherFiles/localData";

const getTotalTaskCount = () => {
    const data = localStorage.getItem('todosAppData');
    const parsedData = JSON.parse(data);

    let totalCount = 0;
    for (let boardId in parsedData.boards) {
        totalCount += Object.keys(parsedData.boards[boardId].taskItems).length;
    }
    return totalCount + 1;
}

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const { boardId, task } = action.payload;
            const board = state.boards[`board${boardId}`];
            const taskId = getTotalTaskCount();

            const newTask = {
                taskId,
                taskTitle: task.taskTitle,
                taskDescription: task.taskDescription,
                isCompleted: false,
            }

            const updateBoard = {
                ...board,
                taskItems: {
                    ...board.taskItems,
                    [`task${taskId}`]: newTask,
                }
            }
            state.boards[`board${boardId}`] = updateBoard

            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        toggleTodo: (state, action) => {
            const id = action.payload;

            for (let boardId in state.boards) {
                let board = state.boards[boardId];
                for (let taskItemId in board.taskItems) {
                    let task = board.taskItems[taskItemId];
                    if (task.taskId === id) {
                        task.isCompleted = !task.isCompleted;
                        console.log("Task toggled:", task.taskId);
                        break;
                    }
                }
            }
            for (const boardId in state.boards) {
                state.boards[boardId].taskItems = Object.values(state.boards[boardId].taskItems)
                    .sort((a, b) => {
                        if (a.isCompleted && !b.isCompleted) return 1;
                        if (!a.isCompleted && b.isCompleted) return -1;
                        return 0;
                    })
                    .reduce((acc, task) => {
                        acc[`task${task.taskId}`] = task;
                        return acc;
                    }, {});
            }
            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        updateTodo: (state, action) => {
            const { taskId, newTask } = action.payload;

            for (let boardId in state.boards) {
                const board = state.boards[boardId];
                for(let taskItemId in board.taskItems){
                    const task = board.taskItems[taskItemId];
                    if(task.taskId === taskId){
                        task.taskTitle=newTask.taskTitle;
                        task.taskDescription=newTask.taskDescription;
                        break;
                    }
                }
            }
            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        removeTodo: (state, action) => {

        },

    }
});

export const { addTodo, toggleTodo, updateTodo, removeTodo } = taskSlice.actions;

export default taskSlice.reducer;