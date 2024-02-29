import { AllTodoItems, TodoItem } from './todo.js';
import { AllProjectsItems, ProjectItem } from './project.js';
import { leftPanel, leftPanelAvatar } from './leftpanel.js';
import '../css/styles.css';
import todoHandler from './todohandler.js';

let todoItems = new AllTodoItems;
let allItems = todoItems.loadToDoItems();

let projectItems = new AllProjectsItems;

let allProjects = projectItems.loadProjects();

// Make sure there is alway a default project
if (allProjects === null) {
    allProjects = [];
    let newProject = new ProjectItem("Default", 1);
    projectItems.addItem(newProject, allProjects);
}

// Just for debugging
/*
 let newtodo = new TodoItem("TodoTitle","descr","01/01/2020", "high", "notes" , false, 1, 1);
todoItems.addItem(newtodo, allItems);
 newtodo = new TodoItem("TodoTitle","descr","01/01/2020", "high", "notes" , false, 1, 2);
*/

/* debug project 
*/

/*
let projectidtoremove = 6 ;
if (todoItems.checkProjectId(projectidtoremove, allItems)) {
    console.log("Cannot remove project.. there are todo's")
} else {

    console.log('remove project' + projectidtoremove)
    projectItems.removeItem(projectidtoremove, allProjects)
}
*/

/*
let newProject = new ProjectItem("New project", 6);
projectItems.addItem(newProject, allProjects);
*/

/* DOM Actions */

let drawleftpanel = new leftPanel;

drawleftpanel.leftPanelAvatar();
drawleftpanel.leftPanelTodo();
drawleftpanel.leftPanelProject();
drawleftpanel.leftPanelTodoMenu();
drawleftpanel.leftPanelProjects(allProjects);




