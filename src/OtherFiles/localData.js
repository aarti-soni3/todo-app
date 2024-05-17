import todosAppData from "./TodoAppData";

// localStorage.clear()


const initialData = localStorage.getItem('todosAppData');

if (!JSON.parse(initialData)) {
    localStorage.setItem('todosAppData', JSON.stringify(todosAppData));
}
const initialState = localStorage.getItem('todosAppData');
console.log(`initialState : ${initialState}`);


// const initialState=todosAppData;
export default JSON.parse(initialState);