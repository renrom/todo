import Today from '../assets/calendar_today.svg';
import { AllTodoItems, TodoItem } from './todo.js';

let todoItems = new AllTodoItems;

export class rightPanel {
    constructor() { }

    rightPanelHeader() {
        const headerImage = document.querySelector("#headerimage");
        const headerText = document.querySelector("#headertext");

        headerImage.src = Today;


        let greetingtext = 'What ToDo ToDay';
        headerText.textContent = greetingtext;

    };

    rightPanelBodyToday() {

        const allItems = todoItems.loadToDoItems();
        const today = new Date().toISOString().substring(0, 10);

        let placeAllTodo = document.querySelector(".right-container-body");

        placeAllTodo.innerHTML = ''
        const filteredToDo = allItems.filter((todo) => todo.duedate === today);

        filteredToDo.forEach((todo) => {

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
            todoPriority.textContent = todo.priority;

            const todoFinished = document.createElement('div')
            todoFinished.className = 'todo-finished';
            todoFinished.textContent = todo.finished;

            const todoProject = document.createElement('div')
            todoProject.className = 'todo-project'
            todoProject.textContent = todo.projectid;

            todoItem.appendChild(todoItemTitle);
            todoItem.appendChild(todoHr);
            todoItem.appendChild(todoDescription);
            todoItem.appendChild(todoDueDate);
            todoItem.appendChild(todoPriority);
            todoItem.appendChild(todoFinished);
            todoItem.appendChild(todoProject);

            placeAllTodo.appendChild(todoItem);


        });




    };






}


