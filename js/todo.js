const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');
const TODOS_KEY = "todos";

let toDos = [];

function handleSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        todo: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    showTodo(newTodoObj);
    savedTodo();
}

function showTodo(newTodoObj){
    const li = document.createElement('li');
    const span=document.createElement('span');
    const delButton = document.createElement('button');
    // const editButton = document.createElement('button');
    const dateSpan = document.createElement('span');
    const date = new Date();
    const today = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();
    //작성한 날짜 생성
    dateSpan.className="date";
    dateSpan.innerText = `${year}-${month}-${today}`
    //삭제 버튼 생성
    delButton.innerText = "삭제"; 
    delButton.className="del-button";
    // //수정 버튼 생성
    // editButton.innerText = '수정';
    // editButton.className="edit-button";
    // todo List 생성
    li.id  = newTodoObj.id;
    span.innerText = newTodoObj.todo;
    li.appendChild(span);
    li.appendChild(dateSpan);
    li.appendChild(delButton);
    // li.appendChild(editButton);
    todoList.prepend(li);

    delButton.addEventListener('click',deleteTodo);
}

function savedTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(e){
    const delTodo = e.target.parentElement;
    toDos = toDos.filter((todo)=>{
        return todo.id !== parseInt(delTodo.id);
    });
    delTodo.remove();
    savedTodo();
}

todoForm.addEventListener('submit', handleSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    //이전에 작성한 todoList 가 있다면 보여주기
    //LocalItem 객체화시켜서 배열에 넣어주기
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(showTodo);
}