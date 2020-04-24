var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = ''; //tudo que tiver dentro da ul sera removido. Para evitar que nao fique recolocando os todos novamente abaixo da lista;

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute( 'href' , '#' ); 


        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkText);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText); //adiciona o valor na var todos
    inputElement.value = ''; //apaga o texto atual do input
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}