import Today from '../assets/calendar_today.svg';
import { AllTodoItems, TodoItem } from './todo.js';
import { AllProjectsItems, ProjectItem } from './project.js';
import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/edit.svg'
import todoHandler from './todohandler.js';


let todoItems = new AllTodoItems;
let projectItems = new AllProjectsItems;

export class rightPanel {
    constructor() { }

    rightPanelHeader(greetingtext) {
        const headerImage = document.querySelector("#headerimage");
        const headerText = document.querySelector("#headertext");

        headerImage.src = Today;

        
        headerText.textContent = greetingtext;


    };

    rightPanelBodyUpcoming() {
        const allItems = todoItems.loadToDoItems();
        const allProjects = projectItems.loadProjects();
        let placeAllTodo = document.querySelector(".right-container-body");

        let textfinished = '';
        placeAllTodo.innerHTML = ''

    }

    rightPanelBody(todoitems) {
        let textfinished = '';
        const allProjects = projectItems.loadProjects();
        let placeAllTodo = document.querySelector(".right-container-body");

        placeAllTodo.innerHTML = '';

        if (todoitems === null) {
            todoitems = [];
        }
        todoitems.forEach((todo) => {

            const todoItem = document.createElement('div');
            todoItem.className = 'todoitem';

            const todoItemTitle = document.createElement('div');
            todoItemTitle.className = 'todo-header';
            todoItemTitle.textContent = todo.title;

            const todoHr = document.createElement('hr');
            todoHr.className = 'todo-hr';

            const todoDescription = document.createElement('div')
            todoDescription.className = 'todo-description';
            todoDescription.textContent = todo.description;


            const todoDueDate = document.createElement('div')
            todoDueDate.className = 'todo-duedate';
            todoDueDate.textContent = todo.duedate;

            const todoPriority = document.createElement('div')
            todoPriority.className = 'todo-priority';
            todoPriority.style.color = 'green'

            if (todo.priority === 'low') {
                todoPriority.style.color = 'blue'
            }

            if (todo.priority === 'high') {
                todoPriority.style.color = 'orange'
            }

            todoPriority.textContent = todo.priority;

            const todoFinished = document.createElement('div')
            todoFinished.className = 'todo-finished';
            if (todo.finished) {
                textfinished = 'ToDo is done'
                todoFinished.style.color = 'green'
            } else {
                textfinished = 'ToDo is not finished'
                todoFinished.style.color = 'red'
            }
            todoFinished.textContent = textfinished;

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'btn-todo-wrapper';
            const todoDelete = document.createElement('img');
            todoDelete.className = 'btn-delete-todo';
            const todoEdit = document.createElement('img');
            todoEdit.className = 'btn-edit-todo';


            todoDelete.src = DeleteIcon;
            todoEdit.src = EditIcon;

            todoDelete.addEventListener("click", function (e) {
                e.preventDefault();
                todoHandler("deletetodo", undefined, undefined, todo.todoid);
            })

            buttonDiv.appendChild(todoDelete);
            buttonDiv.appendChild(todoEdit);



            const todoProject = document.createElement('div')
            todoProject.className = 'todo-project'

            todoProject.textContent = allProjects.find((e) => e.projectid === todo.projectid).description;

            todoItem.appendChild(todoItemTitle);
            todoItem.appendChild(todoHr);
            todoItem.appendChild(todoDescription);
            todoItem.appendChild(todoDueDate);
            todoItem.appendChild(todoPriority);
            todoItem.appendChild(todoFinished);
            todoItem.appendChild(todoProject);
            todoItem.appendChild(buttonDiv);

            placeAllTodo.appendChild(todoItem);


        });



    }


    rightPanelBodyToday() {

        const allItems = todoItems.loadToDoItems();
        const today = new Date().toISOString().substring(0, 10);
        const filteredToDo = allItems.filter((todo) => todo.duedate === today);
        return filteredToDo
    };
}


