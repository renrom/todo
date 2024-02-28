
export function loadProjects() {
    const loadProjectItems = JSON.parse(localStorage.getItem("projectsitems"));
    return (loadProjectItems);

}

export function loadToDoItems() {
    const todoItems = JSON.parse(localStorage.getItem("pc"));

    return (todoItems);


}

export class TodoItem {
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

export class TodoItemCollection {
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