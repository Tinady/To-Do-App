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
        
        
     //create
       function createatodo(title,dudate)
       {
           const id= '' + new Date().getTime();
           todos.push({title:title,
           dueDate:duedate,
           id:id});

           savetodos();
       }

    // remove

       function removetodo(idtodelete)
       {
           todos = todos.filter(function(todo){
       // if the id of this todo matches Idto delete return true
      if(todo.id===idtodelete)
      {
       return false;
      }
      else
      { return true;}

