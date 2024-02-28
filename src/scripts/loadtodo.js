export default function loadToDoItems() {
    const items = JSON.parse(localStorage.getItem("pc"));

    return (items);

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