//Model
    // if local storage has a list of todos use it
    let todos;
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
   //to change to an array the above code
    if(Array.isArray(savedTodos))
    {

      todos= savedTodos;
       
    }
    else{
        todos=[
       {title:'Get groceries',
        dueDate:'2021-10-04',
       id:'id1'},

        {title:'Wash cars',
        dueDate:'2021-11-04',
        id:'id2'},

        {title:'Make Dinner',
        dueDate:'2022-10-04',
        id:'id3'}
   ]
