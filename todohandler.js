//import {loadProjects, loadToDoItems, TodoItemCollection, TodoItem} from './loadprojects';
import { AllProjectsItems, ProjectItem } from './project.js';
import { AllTodoItems, TodoItem } from './todo.js';
import { leftPanel, leftPanelAvatar } from './leftpanel.js';


let projectItems = new AllProjectsItems;
let todoItems = new AllTodoItems;

export default function todoHandler(whattodo) {

    console.log('todohandler');

    let counter = 0;
    if (whattodo === 'addproject') {
        
        const saveProject = document.querySelector('#saveproject');
        const cancelProject = document.querySelector('#cancelproject');
        const dialog = document.querySelector("#addproject");
        const allProjects = projectItems.loadProjects();
        dialog.showModal();

        counter++;
        saveProject.addEventListener("click", function (e) {
            e.preventDefault();


            console.log('blalbabla');

            const projectName = document.querySelector("#projectname").value
            let drawleftpanel = new leftPanel;
            let newProject = new ProjectItem(projectName, 3);
            projectItems.addItem(newProject, allProjects);

            dialog.close();
            console.log('dit is een test')
            console.log('Counter' + counter)
            drawleftpanel.leftPanelProjects(projectItems.loadProjects());
            
        });

        cancelProject.addEventListener("click", (e) => {
            e.preventDefault();

            
            dialog.close();
        });
    }

    if (whattodo === 'addtodo') {
        const saveTodo = document.querySelector('#savetodo');
        const cancelTodo = document.querySelector('#canceltodo');
        const dialog = document.querySelector("#addtodo");
        const selectproject = document.querySelector("#project");
        const allProjects = projectItems.loadProjects();
        let allItems = todoItems.loadToDoItems();

        // If there are no ToDo's, then make an empty array

        if (allItems === null) {
            allItems = []
        }

        allProjects.forEach((projects) => {

            let newproject = document.createElement('option');
            newproject.text = projects.description;
            newproject.value = projects.projectid;
            selectproject.add(newproject);
        });

        var today = new Date();
        document.querySelector("#duedate").value = new Date().toISOString().substring(0, 10);
        dialog.showModal();
        saveTodo.addEventListener("click", function (e) {
            e.preventDefault();
            const todoTitle = document.querySelector("#title").value
            
            const todoDescription = document.querySelector("#description").value;
            const todoDueDate = document.querySelector("#duedate").value;
            const todoPriority = document.getElementsByName("priority");
            let todoPrio = '';
            for (let i = 0; i < todoPriority.length; i++) {
                if (todoPriority[i].checked) {
                    todoPrio = todoPriority[i].value
                }
            }
            const todoProject = document.querySelector("#project").value


            if (todoTitle === '') {
                alert('Please add at least a title')
            } else {


                const newtodo = new TodoItem(todoTitle, todoDescription, todoDueDate, todoPrio, "notes", false, todoProject, 1);

                todoItems.addItem(newtodo, allItems);
                dialog.close();
            }
        });

        cancelTodo.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.close();

        });
    }
}
