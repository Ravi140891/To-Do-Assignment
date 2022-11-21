const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const userPriority = document.querySelector(".user_priority");


todoForm.addEventListener('submit',(e) => {
e.preventDefault();
const newToDoText = todoInput.value;
const newLi = document.createElement("LI");
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


const filterEl = document.getElementById("priority_choice")
// const filter = document.getElementById("priority_choice");
// filter.addEventListener('click', (e) => {
//   if(e.target.value == "high"){
//   moderate.style.display = "none";
//   high.style.display = "block"
// }
// if(e.target.value == "moderate"){
//   high.style.display = "none";
//   moderate.style.display = "block";
// }
// if(e.target.value  == "all"){
//   high.style.display = "block";
//   moderate.style.display = "block";
// }
// console.log(e.target.value);
// })

filterEl.addEventListener('change', filterEntry);
const optionEl = document.getElementById("priority_choice");
function filterEntry (e) {
let listEl = document.getElementsByTagName("li");
for(let i = 4; i < listEl.length; i++){
  if(e.target.value == "high"){
    listEl.getElementsByClassName("yellow").style.display = "none";
    }
  }
}





const selectedEl = () => {
  const priority = document.getElementById("priority").value;
}
const priority = selectedEl();


