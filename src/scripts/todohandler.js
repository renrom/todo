//import {loadProjects, loadToDoItems, TodoItemCollection, TodoItem} from './loadprojects';
import { AllProjectsItems, ProjectItem } from './project.js';
import { AllTodoItems, TodoItem } from './todo.js';
import { leftPanel, leftPanelAvatar } from './leftpanel.js';
import { rightPanel } from './rightpanel.js';
import DeleteIcon from '../assets/delete.svg';

const uuid = require('uuid');

let projectItems = new AllProjectsItems;
let todoItems = new AllTodoItems;

export default function todoHandler(whattodo, projectid, projectname, todoid) {



    if (whattodo === 'marktododone') {

        let allItems = todoItems.loadToDoItems();
        let drawrightpanel = new rightPanel;

        let markdone = allItems.find((todo) => todo.todoid === todoid);

        if (markdone.finished) {
            markdone.finished = false;
        } else {
            markdone.finished = true;
        }

        let findChangedTodoIndex = allItems.findIndex(x => x.todoid === markdone.todoid)

        allItems[findChangedTodoIndex].finished = markdone.finished;
        localStorage.setItem("todo", JSON.stringify(allItems));

        drawrightpanel.rightPanelHeader("All ToDo's");
        drawrightpanel.rightPanelBody(todoItems.loadToDoItems());

    }

    if (whattodo === 'upcoming') {

        let todoItems = new AllTodoItems;
        let drawrightpanel = new rightPanel;
        drawrightpanel.rightPanelHeader("All ToDo's");
        drawrightpanel.rightPanelBody(todoItems.loadToDoItems());
    }
    if (whattodo === 'today') {

        let todoItems = new AllTodoItems;
        let drawrightpanel = new rightPanel;
        drawrightpanel.rightPanelHeader("All ToDo's for today");
        drawrightpanel.rightPanelBody(drawrightpanel.rightPanelBodyToday());
    }
    if (whattodo === 'deletetodo') {
        const dialogremove = document.querySelector('#removetodo');
        const sureYes = document.querySelector('#sureyestodo');
        const sureNo = document.querySelector('#surenotodo');
        let drawrightpanel = new rightPanel;
        let allItems = todoItems.loadToDoItems();

        dialogremove.showModal();

        sureYes.addEventListener("click", function (e) {
            e.preventDefault();
            todoItems.removeItem(todoid, allItems);
            drawrightpanel.rightPanelHeader("All ToDo's");
            drawrightpanel.rightPanelBody(todoItems.loadToDoItems());
            dialogremove.close();

        })
    }

    if (whattodo === 'editproject') {

        const saveProject = document.querySelector('#saveeditproject');
        const cancelProject = document.querySelector('#canceleditproject');
        const removeProject = document.querySelector('.delete-project');
        const dialog = document.querySelector("#editproject");
        const dialogremove = document.querySelector('#removeproject');

        let allProjects = projectItems.loadProjects();

        const imageholder = document.querySelector('.delete-project');
        const imagedelete = document.createElement('img')
        const drawleftpanel = new leftPanel;
        imageholder.innerHTML = '';
        imagedelete.src = DeleteIcon;

        imagedelete.style.height = '30px';
        imagedelete.style.cursor = 'pointer';

        imageholder.appendChild(imagedelete);

        document.querySelector('#editprojectname').value = projectname

        dialog.showModal();

        removeProject.addEventListener("click", function (e) {
            e.preventDefault();

            const sureYes = document.querySelector('#sureyes');
            const sureNo = document.querySelector('#sureno');
            const drawleftpanel = new leftPanel;
            let allItems = todoItems.loadToDoItems();

            dialogremove.showModal();


            sureYes.addEventListener("click", function (e) {
                e.preventDefault();

                if (allItems === null) {
                    allItems = []
                }


                if (todoItems.checkProjectId(projectid, allItems)) {
                    alert('Sorry, there is still a ToDo to Do on this project!')
                } else {


                    projectItems.removeItem(projectid, allProjects);
                    drawleftpanel.leftPanelProjects(projectItems.loadProjects());
                }

                dialogremove.close();
                dialog.close();
            }, { once: true })


            sureNo.addEventListener("click", function (e) {
                e.preventDefault();
                dialogremove.close();
                dialog.close();
            }, { once: true })

        }, { once: true });


        saveProject.addEventListener("click", function (e) {
            e.preventDefault();
            const drawleftpanel = new leftPanel;
            const newProjectName = document.querySelector('#editprojectname').value;

            let findNameIndex = allProjects.findIndex(x => x.projectid === projectid)
            allProjects[findNameIndex].description = newProjectName;

            localStorage.setItem("projects", JSON.stringify(allProjects));
            dialog.close();

            drawleftpanel.leftPanelProjects(projectItems.loadProjects());

        }, { once: true });

        cancelProject.addEventListener("click", (e) => {
            e.preventDefault();


            dialog.close();
        }, { once: true });

    }
    if (whattodo === 'addproject') {

        const saveProject = document.querySelector('#saveproject');
        const cancelProject = document.querySelector('#cancelproject');
        const dialog = document.querySelector("#addproject");
        const allProjects = projectItems.loadProjects();
        dialog.showModal();


        saveProject.addEventListener("click", function (e) {
            e.preventDefault();
            const projectName = document.querySelector("#projectname").value
            document.querySelector("#projectname").value = '';


            const uniqeId = uuid.v4();
            const drawleftpanel = new leftPanel;
            let newProject = new ProjectItem(projectName, uniqeId);

            projectItems.addItem(newProject, allProjects);

            dialog.close();

            drawleftpanel.leftPanelProjects(projectItems.loadProjects());

        }, { once: true });

        cancelProject.addEventListener("click", (e) => {
            e.preventDefault();


            dialog.close();
        }, { once: true });
    }

    if (whattodo === 'edittodo') {

        const saveTodo = document.querySelector('#savetodo');
        const cancelTodo = document.querySelector('#canceltodo');
        const dialog = document.querySelector("#addtodo");
        const selectproject = document.querySelector("#project");
        const allProjects = projectItems.loadProjects();

        selectproject.innerHTML = '';
        
        let drawrightpanel = new rightPanel;

        let allItems = todoItems.loadToDoItems();

        let findChangedTodoIndex = allItems.findIndex(x => x.todoid === todoid)
        let editItem = allItems[findChangedTodoIndex];

        const todoTitle = document.querySelector("#title")
        todoTitle.value = editItem.title;

        const todoDescription = document.querySelector("#description");
        todoDescription.value = editItem.description;
        const todoDueDate = document.querySelector("#duedate")

        todoDueDate.value = editItem.duedate;
        const todoPriority = document.getElementsByName("priority");

        if (editItem.priority === 'low') {
            todoPriority[0].checked = true;
        }
        if (editItem.priority === 'medium') {
            todoPriority[1].checked = true;
        }
        if (editItem.priority === 'high') {
            todoPriority[2].checked = true;
        }


        allProjects.forEach((projects) => {

            let newproject = document.createElement('option');
            newproject.text = projects.description;
            newproject.value = projects.projectid;
            selectproject.add(newproject);
        });

        const todoProject = document.querySelector("#project")
        todoProject.value = editItem.projectid;


        dialog.showModal();

        saveTodo.addEventListener("click", function (e) {
            e.preventDefault();


            allItems[findChangedTodoIndex].title = document.querySelector("#title").value
            allItems[findChangedTodoIndex].description = document.querySelector("#description").value;
            allItems[findChangedTodoIndex].duedate = document.querySelector("#duedate").value;
            const todoPriority = document.getElementsByName("priority");
            let todoPrio = '';
            for (let i = 0; i < todoPriority.length; i++) {
                if (todoPriority[i].checked) {
                    todoPrio = todoPriority[i].value
                }
            }
            allItems[findChangedTodoIndex].priority = todoPrio;
            allItems[findChangedTodoIndex].projectid = document.querySelector("#project").value;

            localStorage.setItem("todo", JSON.stringify(allItems));

            dialog.close();

            drawrightpanel.rightPanelHeader("All ToDo's");
            drawrightpanel.rightPanelBody(todoItems.loadToDoItems());

        })


    }


    if (whattodo === 'addtodo') {
        const saveTodo = document.querySelector('#savetodo');
        const cancelTodo = document.querySelector('#canceltodo');
        const dialog = document.querySelector("#addtodo");
        const selectproject = document.querySelector("#project");
        const allProjects = projectItems.loadProjects();

        let allItems = todoItems.loadToDoItems();
        const uniqeId = uuid.v4();
        selectproject.innerHTML = '';
        // If there are no ToDo's, then make an empty array

        if (allItems === null) {
            allItems = []
        }

        let todoPriority = document.getElementsByName("priority");
        todoPriority[1].checked = true;

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
            document.querySelector("#title").value = '';

            const todoDescription = document.querySelector("#description").value;
            document.querySelector("#description").value = '';

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

                const newtodo = new TodoItem(todoTitle, todoDescription, todoDueDate, todoPrio, "notes", false, todoProject, uniqeId);
                todoItems.addItem(newtodo, allItems);

                let drawrightpanel = new rightPanel;
                drawrightpanel.rightPanelHeader("All ToDo's");
                drawrightpanel.rightPanelBody(todoItems.loadToDoItems());
                dialog.close();
            }
        }, { once: true });

        cancelTodo.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(".formlayout").reset();





            dialog.close();

        }, { once: true });
    }
}
