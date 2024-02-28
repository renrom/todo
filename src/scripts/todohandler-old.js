import loadProjects from './loadprojects';
import TodoItemCollection from './loadtodo';


//import { TodoItem, TodoItemCollection } from './todoitem.js';


export default function todoHandler(whattodo) {

    

    if (whattodo === 'addtodo') {

        const saveTodo = document.querySelector('#savetodo');
        const cancelTodo = document.querySelector('#canceltodo');

        const dialog = document.querySelector("#addtodo");
        const selectproject = document.querySelector("#project");
        const projects = loadProjects();
        
     
        projects.items.forEach((projects) => {

            let newproject = document.createElement('option');
            newproject.text = projects.description;
            newproject.value = projects.projectid;
            selectproject.add(newproject);
        });

        dialog.showModal();




        saveTodo.addEventListener("click", function(e) {
            e.preventDefault();

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

            

            // const todoItemCollection = new TodoItemCollection();


            //const todoItems = loadToDoItems();

            //console.log(todoItems);

            //console.log(todoItemCollection);

            //todoItemCollection.addItem(todoTitle, todoDescription, todoDueDate, todoPrio, 'notes', false, todoProject, 14);




            //

        });

        cancelTodo.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.close();

        });


    }

}
