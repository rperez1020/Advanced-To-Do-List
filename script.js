const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const list = document.querySelector('#list')
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()
todos.forEach(renderTodo)


list.addEventListener('change', e => {
    if(!e.target.matches('[data-list-item-checkbox]')) return
        
    
})


form.addEventListener('submit', e =>{
    e.preventDefault()

    const todoName = todoInput.value 
    if(todoName === "") return
    const newTodo = {
        name: todoName,
        complete: false
    }

    todos.push(newTodo)
    renderTodo(newTodo)
    saveTodos()
    todoInput.value = ""
})

function renderTodo(todo){
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector('[data-list-item-text]')
    textElement.innerText = todo.name
    list.appendChild(templateClone)
}

function loadTodos(){
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todosString) || []
}

function saveTodos(){
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}
