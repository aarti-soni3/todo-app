import todosAppData from "./TodoAppData";

// localStorage.clear();
// const data =  JSON.stringify(todosAppData);
// const initialState=JSON.parse(data);

const initialData = localStorage.getItem('todosAppData');

if (!JSON.parse(initialData)) {
    localStorage.setItem('todosAppData', JSON.stringify(todosAppData));
}
const data = localStorage.getItem('todosAppData');
const initialState =JSON.parse(data);
console.log(`data : ${data}`);


export default initialState;