
export class ProjectItem {
    constructor(description, projectid) {
        this.description = description;
        this.projectid = projectid;
    }
}

export class AllProjectsItems {
    constructor() {
        //this.items = [];
    }

    addItem(project, allprojects) {
        allprojects.push(project);
        localStorage.setItem("projects", JSON.stringify(allprojects));
    }

    removeItem(id, allprojects) {


        let x = allprojects.filter(i => i.projectid !== id);


        localStorage.setItem("projects", JSON.stringify(x));
    }

    loadProjects() {
        return JSON.parse(localStorage.getItem("projects"));
    }

}
