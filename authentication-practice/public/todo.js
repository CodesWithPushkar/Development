async function displayTodos(){
    console.log("I am here")
    const response = await fetch("http://localhost:3000/todos", {
        headers: {
            token: localStorage.getItem("token")
        }
    });
    const data = await response.json();
    const todos = data.todos;
    const displayTodos = document.querySelector("#display-todos");
        for(let todo of todos){
            const li = document.createElement('li');
            li.innerHTML = `
                    <input type="checkbox" ${todo.done ? "checked" : ""}>
                    <span class="todo-text ${todo.done ? "completed" : ""}">
                        ${todo.title}
                    </span>
                    <span class="status">
                        ${todo.done ? "Completed" : "Incomplete"}
                    </span>
                    <div class="btn-group">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
            `
            displayTodos.appendChild(li);
        }
}

displayTodos();

const addbtn = document.querySelector("#todo-btn-add");
addbtn.addEventListener('click', async () => {
    console.log("i am here");
    const task = document.querySelector("#todo-task").value;
    const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        },
        body: JSON.stringify({
            task
        })
    })
    const data = await response.json();
    if(response.ok){
        alert(data.message);
        displayTodos();
    }
    else{
        alert(data.message);
    }

});

