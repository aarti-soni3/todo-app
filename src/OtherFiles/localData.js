import todosAppData from "./TodoAppData";

// localStorage.clear()


const initialData = localStorage.getItem('todosAppData');
console.log(`initialData : ${initialData}`);
console.log(`typeof initialData : ${typeof initialData}`);

if (!JSON.parse(initialData)) {
    localStorage.setItem('todosAppData', JSON.stringify(todosAppData));
}
const initialState = localStorage.getItem('todosAppData');
console.log(`initialState : ${initialState}`);
console.log(`typeof initialData : ${typeof initialData}`);


// const initialState=todosAppData;
export default JSON.parse(initialState);