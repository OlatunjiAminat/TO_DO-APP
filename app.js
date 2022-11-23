let todoItems = [{
    title:'Dealing with emails',
    id: 'id10'
},
{
    title:'Managing projects', 
    id: 'id11'
} ,
{
    title:'Learning new things', 
    id: 'id12'
},
{
    title:'Maintaining my Portfolio',
    id: 'id13'
},
{
    title: 'Knowing what groceries to buy',
    id:'id14'
},
{
    title:'Places to visit on my next holiday',
    id:'id15'
} ];

    
    

displayTodoItems();


function addTodoItems() {
    let inputBox = document.getElementById('item');
    let inputTitle = inputBox.value;
    // const id = new Date().getTime();
    const id = " " + Math.random()
    todoItems.push({
        title: inputTitle,
        id: id
    });
    if (inputTitle === "") {  
        todoItems.pop()
        alert('pls,fill in the  required input');
    }else{
       return  displayTodoItems();
    };
    // displayTodoItems();
}

function displayTodoItems() {
    // reset todo items
    document.getElementById('items-cont').innerHTML = '';

    todoItems.forEach( function(todoItems) {
        let  element = document.createElement('div');
        element.innerText = todoItems.title;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        element.appendChild(deleteBtn) ;
        deleteBtn.style = 'margin-left: 80px';
        deleteBtn.addEventListener('click', deleteTodoItems)
        deleteBtn.id = todoItems.id;
        let todoList = document.getElementById('items-cont');
        todoList.appendChild(element) ;
    });

}

function deleteTodoItems(event) {
    const deleteBtn = event.target;
    const idDeleteButton = deleteBtn.id;

    todoItems = todoItems.filter(function (todoItems) {
        if (todoItems.id === idDeleteButton){
            return false;
        }else{
            return true;
        }
    })

    displayTodoItems()

};