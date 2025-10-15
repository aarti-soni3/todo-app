import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../OtherFiles/localData";

const getTotalTaskCount = () => {
    const data = localStorage.getItem('todosAppData');
    const parsedData = JSON.parse(data);
    let totalCount = 0;

    totalCount = parsedData.nextTaskId;
    return totalCount;
}

const getTotalBoardCount = () => {
    const data = localStorage.getItem('todosAppData');
    const parsedData = JSON.parse(data);
    let totalCount = 0;

    totalCount = parsedData.nextBoardId;
    return totalCount;
}

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const { boardId, task } = action.payload;
            const taskId = getTotalTaskCount();

            const newTask = {
                taskId,
                taskTitle: task.taskTitle,
                taskDescription: task.taskDescription,
                isCompleted: false,
                priority:task.priority,
            }

            console.log(newTask);
            state.boards[boardId].taskIds.push(taskId);
            state.tasks[taskId] = newTask;

            state.nextTaskId+=1;
            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        toggleTodo: (state, action) => {
            const taskId = action.payload;
            state.tasks[taskId].isCompleted = !state.tasks[taskId].isCompleted;

            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        updateTodo: (state, action) => {
            const [taskId, title, description,priority] = action.payload;

            state.tasks[taskId] = {
                ...state.tasks[taskId],
                taskTitle: title,
                taskDescription: description,
                priority : priority
            }
            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        removeTodo: (state, action) => {
            const [taskId, boardId] = action.payload;
            state.boards[boardId].taskIds.filter(handleOnDeleteBoard);
            delete state.tasks[taskId];

            function handleOnDeleteBoard(id) {
                // eslint-disable-next-line
                if (id == taskId) {
                    delete state.boards[boardId].taskIds.pop(id);
                }
            }

            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        addBoard: (state, action) => {
            const title = action.payload;
            const boardId = getTotalBoardCount();

            const newBoard = {
                boardTitle: title,
                taskIds: [],
            }

            state.boards = {
                ...state.boards,
                [boardId]: newBoard,
            }
            state.nextBoardId+=1;
            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        updateBoard: (state, action) => {
            const [boardId, boardTitle] = action.payload;
            state.boards[boardId].boardTitle = boardTitle;

            localStorage.setItem('todosAppData', JSON.stringify(state));
        },

        removeBoard: (state, action) => {
            const boardId = action.payload;
            delete state.boards[boardId];

            localStorage.setItem('todosAppData', JSON.stringify(state));
        },
    },
});

export const { addTodo, toggleTodo, updateTodo, removeTodo, addBoard, updateBoard, removeBoard } = taskSlice.actions;
export default taskSlice.reducer;