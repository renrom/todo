import {loadProjects, loadToDoItems, TodoItemCollection, TodoItem} from './loadprojects';

export default function todoHandler(whattodo) {
 

    if (whattodo === 'addtodo') {
        const saveTodo = document.querySelector('#savetodo');
        const cancelTodo = document.querySelector('#canceltodo');

        const dialog = document.querySelector("#addtodo");
        const selectproject = document.querySelector("#project");
        const projects = loadProjects();

        const todoitems = loadToDoItems();

        projects.items.forEach((projects) => {

            let newproject = document.createElement('option');
            newproject.text = projects.description;
            newproject.value = projects.projectid;
            selectproject.add(newproject);
        });

        dialog.showModal();


        saveTodo.addEventListener("click", function(e) {
            e.preventDefault();
            
            const todoItemCollection = new TodoItemCollection();
            const todoTitle = document.querySelector("#title").value
            const todoDescription = document.querySelector("#description").value
            const todoDueDate = document.querySelector("#duedate").value
            const todoPriority = document.getElementsByName("priority");
            let todoPrio = '';
            for (let i = 0; i < todoPriority.length; i++) {
                if (todoPriority[i].checked) {
                    todoPrio = todoPriority[i].value
                }
            }
            const todoProject = document.querySelector("#project").value


            todoitems.items.forEach((todo) => {
                todoItemCollection.addItem(todo.title, todo.description, todo.duedate, todo.priority, todo.notes, todo.finished, todo.projectid, todo.todoid);
            });
            

            todoItemCollection.addItem(todoTitle,todoDescription,todoDueDate,todoPriority,'notes', false, todoPriority, todoProject, 5  );
            localStorage.setItem("pc",JSON.stringify(todoItemCollection));
            console.log(todoItemCollection)
            dialog.close();




        });

        cancelTodo.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.close();

        });





    }

}
