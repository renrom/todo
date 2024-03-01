import { AllTodoItems, TodoItem } from './todo.js';
import { AllProjectsItems, ProjectItem } from './project.js';
import { leftPanel, leftPanelAvatar } from './leftpanel.js';
import { rightPanel } from './rightpanel.js';

import '../css/styles.css';
import todoHandler from './todohandler.js';

let todoItems = new AllTodoItems;
let allItems = todoItems.loadToDoItems();

let projectItems = new AllProjectsItems;

let allProjects = projectItems.loadProjects();

// Make sure there is alway a default project
if (allProjects === null) {
    allProjects = [];
    const uuid = require('uuid');
    const uniqeId = uuid.v4();

    let newProject = new ProjectItem("Default", uniqeId);
    projectItems.addItem(newProject, allProjects);
}


let drawleftpanel = new leftPanel;
let drawrightpanel = new rightPanel;

drawleftpanel.leftPanelAvatar();
drawleftpanel.leftPanelTodo();
drawleftpanel.leftPanelProject();
drawleftpanel.leftPanelTodoMenu();
drawleftpanel.leftPanelProjects(allProjects);

drawrightpanel.rightPanelHeader("List of all ToDo's");

drawrightpanel.rightPanelBody(todoItems.loadToDoItems());

//drawrightpanel.rightPanelBodyToday();


