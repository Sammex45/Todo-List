let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo");

//Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(event){
event.preventDefault();

const todoDiv= document.createElement('div');
todoDiv.classList.add('todo');

const newTodo= document.createElement('li');
newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item')
todoDiv.appendChild(newTodo);

//ADD TO TO LOCAL STORAGE
// saveLocalTodos(todoInput.value);

const completedButton= document.createElement('buttton');
// add an icon tag with innerHTML
completedButton.innerHTML= '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-btn')
todoDiv.appendChild(completedButton);



const trashButton= document.createElement('button');
// add an icon tag with innerHTML
trashButton.innerHTML= '<i class= "fas fa-trash"></i>';
trashButton.classList.add('trash-btn')
todoDiv.appendChild(trashButton);

//Append the above to the todoList ul in the html code
todoList.appendChild(todoDiv);

//clear TodoInput value
todoInput.value='';

}

function deleteCheck(e){
const item= e.target;
//DELETE TODO
    if(item.classList[0]=== "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            //delete event
            todo.remove()

        });
        
    }

    if (item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    // console.log(todoList.childNodes)
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all": 
            todo.style.display="flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display="flex";

                }else {
                    todo.style.display ="none";
                }

                break;
                case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display ="flex";
                }else{
                    todo.style.display="none";
                }
                break;

        }
    })
}

// function saveLocalTodos(todo){
//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos=[];
//     }else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', Json.stringify(todos));
// }






























