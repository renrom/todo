import { format } from "date-fns";
import '../css/styles.css';
import loadToDoItems from './loadtodo.js'
import {loadProjects} from "./loadprojects.js";
import saveProjectItems from './saveprojects.js';
import {TodoItem, TodoItemCollection} from './todoitem.js';


import { leftPanelAvatar, leftPanelTodo, leftPanelProject,leftPanelTodoMenu, leftPanelProjects  } from "./leftpanel.js";

/*
class TodoItem {
    constructor(title, description, duedate, priority, notes, finished, projectid, todoid) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.notes = notes;
        this.finished = finished;
        this.projectid = projectid;
        this.todoid = todoid;
    }

    flipFinished() {
        if (this.finished) {
            this.finished = false
        } else {
            this.finished = true
        }
    }
}
*/

/*
class TodoItemCollection {
    constructor() {
        this.items = [];
    }
    addItem(title, description, duedate, priority, notes, finished, projectid, todoid) {
        if (Array.isArray(this.items)) {
            this.items.push(new TodoItem(title, description, duedate, priority, notes, finished, projectid, todoid));
            localStorage.setItem("pc",JSON.stringify(this));
        }
    }
    removeItem(id) {
        if (Array.isArray(this.items)) {
            this.items = this.items.filter(i => i.todoid !== id);
            localStorage.setItem("pc",JSON.stringify(this));
        }
    }
    checkProjectId(id) {
        return this.items.some(e => e.projectid === id);
    }
  
}

*/
class ProjectItem {
    constructor(description, projectid) {
        this.description = description;
        this.projectid = projectid;
    }
}

class ProjectsCollection {
    constructor() {
        this.items = [];
    }
    addItem(description, projectid) {
        if (Array.isArray(this.items)) {
            this.items.push(new ProjectItem(description, projectid))
        }
    }
    removeItem(id) {

        if (Array.isArray(this.items)) {
            if (!todoItemCollection.checkProjectId(id)) { 
            this.items = this.items.filter(i => i.projectid !== id);
            }
            else {
                console.log("There is still a todo")
            }
        }
    }
}

const todoItemCollection = new TodoItemCollection();
const projectsCollection = new ProjectsCollection();
const getAllProjects = loadProjects();

if (getAllProjects === null) {
    console.log('no projects. have to create a default')
    projectsCollection.addItem('Default',1);  
    saveProjectItems(projectsCollection);

} else {
    
    getAllProjects.items.forEach((projects) => {
        projectsCollection.addItem(projects.description, projects.projectid);
    });
    

}

//todoItemCollection.addItem('test', 'descr', '01/01/2020', 'high', 'notes', false, 4, 4);



//projectsCollection.removeItem(1);

/*
projectsCollection.addItem("Work",2);
saveProjectItems(projectsCollection);
*/

/*localStorage.setItem("pc",JSON.stringify(todoItemCollection));*/

loadToDoItems = loadToDoItems();

loadToDoItems.items.forEach((todo) => {
    todoItemCollection.addItem(todo.title, todo.description, todo.duedate, todo.priority, todo.notes, todo.finished, todo.projectid, todo.todoid);
});


leftPanelAvatar();
leftPanelTodo();
leftPanelProject();
leftPanelTodoMenu();
leftPanelProjects(projectsCollection);







