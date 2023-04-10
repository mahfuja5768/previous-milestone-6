function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        console.log(todo)
       const todoDiv = document.createElement('div');
       todoDiv.classList.add('todo-style')
       todoDiv.innerHTML = `
       <h2>id: ${todo.id}</h2>
       <p>title: ${todo.title}</p>
       <p>task completed: ${todo.completed}</p>
       `;
       todoContainer.appendChild(todoDiv)
    }
}
loadTodos()