const saveTodos = (todos) => {
    localStorage.setItem('todo-items', JSON.stringify(todos));
}
const getTodoList = () =>{
    const storedTodoList = localStorage.getItem('todo-items');
    if(storedTodoList){
        return JSON.parse(storedTodoList);
    }
    return [];
}
const addTodo = (todo) =>{
    const storedTodoList = getTodoList();
    storedTodoList.push(todo);
    saveTodos(storedTodoList);
}
const deleteTodo = (id) =>{
    id = parseInt(id);
    const storedTodoList = getTodoList();
    const filterTodos = storedTodoList.filter(todo => todo.id !== id);
    saveTodos(filterTodos);
}

const editTodo = (id,updatedTodo) =>{
    id = parseInt(id);
    const storedTodoList = getTodoList();
    const index = storedTodoList.findIndex(todo=> todo.id === id);
    storedTodoList[index] = updatedTodo;
    // saveTodos(storedTodoList);
    localStorage.setItem('todo-items', JSON.stringify(storedTodoList));
    
}

const saveCompleted = (todos) => {
    localStorage.setItem('completed-items', JSON.stringify(todos));
}
const getCompletedTodos = () =>{
    const storedTodoList = localStorage.getItem('completed-items');
    if(storedTodoList){
        return JSON.parse(storedTodoList);
    }
    return [];
}
const addCompletedTodo = (todo) =>{
    const storedTodoList = getCompletedTodos();
    storedTodoList.push(todo);
    saveCompleted(storedTodoList);
}
export {saveTodos,addTodo,getTodoList,deleteTodo,editTodo,saveCompleted,getCompletedTodos,addCompletedTodo};