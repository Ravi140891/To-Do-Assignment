window.addEventListener("load", () => {
  const todoForm = document.querySelector(".form-todo");
  const todoInput = document.querySelector(".form-todo input[type='text']");
  const priorityVal = document.getElementById("priority");
  const filterPriority = document.querySelector("#priority_choice");

   todoItems = JSON.parse(localStorage.getItem("todo")) || [];
   displayToDO();

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoItem = {
      content: todoInput.value,
      priority: priorityVal.value,
      checked: false,
      };

    
    todoItems.push(todoItem);

    localStorage.setItem("todo", JSON.stringify(todoItems));

    e.target.reset();


    displayToDO();
  });

  filterPriority.addEventListener('change', (e) => {
    let highPriority = document.querySelectorAll(".high");
    let moderatePriority = document.querySelectorAll(".moderate");
    let all = document.querySelectorAll(".list-items");
    console.log(highPriority);
    console.log(moderatePriority);
    console.log(all);
    if (e.target.value == "high") {
      for (let i = 0; i < moderatePriority.length; i++) {
        moderatePriority[i].style.display = "none";
        highPriority[i].style.display = "flex";
      }
    }
    if (e.target.value == "moderate") {
      for (let i = 0; i < highPriority.length; i++) {
        highPriority[i].style.display = "none";
        moderatePriority[i].style.display = "flex";
      }
    }
     if (e.target.value == "all") {
       for (let i = 0; i < all.length; i++) {
         highPriority[i].style.display = "flex";
         moderatePriority[i].style.display = "flex";
       }
     }
  })
});

function displayToDO() {
  const todoUl = document.querySelector(".todo-list");
  todoUl.innerHTML = ""

  todoItems.forEach((todo) => {
    const todoList = document.createElement("li");
    todoList.classList.add("list-items");
    todoList.classList.add(`${todo.priority}`);
    let newLiInnerHTML; 
    if(todo.checked === true){
      newLiInnerHTML =
        `
        <span class="text checked">${todo.content}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`
    } else{
      newLiInnerHTML =
      `
        <span class="text">${todo.content}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`
    }
    todoList.innerHTML = newLiInnerHTML;    
    todoUl.append(todoList);

    todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
        todoItems.splice(e.target.parentNode.parentNode , 1);
        localStorage.setItem('todo', JSON.stringify(todoItems));
      }
      if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        const liInner = liSpan.innerText;
        console.log(liInner);
        liSpan.classList.add("checked");
        
        todoItems.forEach((todo) => {
          if(todo.content === liInner){
            todo.checked = !todo.checked;
          }
        })
        localStorage.setItem('todo', JSON.stringify(todoItems));
      }
    });

    

  });
}
