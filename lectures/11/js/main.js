
//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById("task").value; /!*The  function getElementById() returns the element that has the ID attribute with the specified value.*!/
    todos.push(task); /!*Whatever user inputs in task is pushed to the array todos*!/
    document.getElementById('todos').innerText = todos; /!*Anything user has given input will be displayed*!/
}*/


//============================================
//-----------  STEP - 2 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}

function show() {
    var ul = document.createElement('ul'); /!*variable ul is created*!/
    ul.classList.add("list-group"); /!*List group is added to ul*!/
    for(var i=0; i<todos.length; i++)
    {
        var li = document.createElement('li'); /!*variable li is created*!/
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li); /!*append li to ul*!/
    }
    document.getElementById('todos').appendChild(ul); /!*append ul to todos*!/
}*/


//============================================
//-----------  STEP - 3 ----------------------
//============================================


/*function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo'); /!*The getItem() method of the Storage interface,
    when passed a key name, will return that key's value or null if the key does not exist*!/
    if(todos_str !== null)
        todos = JSON.parse(todos_str);/!*Parse the data with JSON.parse(), and the data becomes a JavaScript object.*!/
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){/!*Remove whitespace from both sides of a string*!/
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();*/



//============================================
//-----------  STEP - 4 ----------------------
//============================================

/*

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1); /!*The splice() method changes the contents of an array by removing existing elements and/or adding new elements*!/
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);/!*removes data when clicked*!/
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();

*/




//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

