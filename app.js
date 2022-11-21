const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const userPriority = document.querySelector(".user_priority");
const filterPriority = document.querySelector("#priority_choice");
todoForm.addEventListener('submit',(e) => {
e.preventDefault();
const newToDoText = todoInput.value;
const newLi = document.createElement("li");
newLi.classList.add("row_list")
if(userPriority.value =="high"){
  newLi.classList.add("red");
}
if(userPriority.value == "moderate"){
  newLi.classList.add("yellow")
}
const newLiInnerHTML = `
        <span class="text">${newToDoText}</span>
        <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
        </div>`;
      newLi.innerHTML = newLiInnerHTML;
      todoList.append(newLi);
      todoInput.value = "";
})

todoList.addEventListener('click', (e) => {
  if(e.target.classList.contains("remove")){
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
})

const selectedEl = () => {
  const priority = document.getElementById("priority").value;
}
const priority = selectedEl();


filterPriority.addEventListener('change', (e) => {
  let highPriority = document.querySelectorAll(".red");
  let moderatePriority = document.querySelectorAll(".yellow");
  let all = document.querySelectorAll(".row_list");
  console.log(moderatePriority);
  console.log(highPriority);
  
  if(e.target.value == "high"){
    for(let i = 0; i < moderatePriority.length; i++){
      moderatePriority[i].style.display = "none";
      highPriority[i].style.display = "flex"
    }
    }

    if(e.target.value == "moderate"){
      for(let i = 0; i < highPriority.length; i++){
        highPriority[i].style.display = "none";
        moderatePriority[i].style.display = "flex";
      }
    }

    if(e.target.value == "all"){
      for(let i = 0; i < all.length; i++){
        highPriority[i].style.display = "flex";
        moderatePriority[i].style.display = "flex";
      }
    }
});
