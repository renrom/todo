// Create new Todo Item

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


// Do stuff with all TodoItems, like add, remove, check for project. etc.

export class AllTodoItems {
    constructor() {
        //this.items = [];
    }
    
    addItem(todo, alltodo) {
            alltodo.push(todo);
            localStorage.setItem("todo",JSON.stringify(alltodo));
    }

    removeItem(id, alltodo) {
            let x  = alltodo.filter(i => i.todoid !== id);
            localStorage.setItem("todo",JSON.stringify(x));
    }

    loadToDoItems() {

               return (JSON.parse(localStorage.getItem("todo")));
    }


    checkProjectId(id, alltodo) {

        return alltodo.some(e => e.projectid === id);

    }

    loadToDoItems() {
        return (JSON.parse(localStorage.getItem("todo")));
    }

    saveToDoItems(todoitems) {
        localStorage.setItem("todo",JSON.stringify(todoitems));
        
    }
}

