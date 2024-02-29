import Avatar from '../assets/avatar.jpg';
import AddTodo from '../assets/add_circle.svg';
import Today from '../assets/calendar_today.svg';
import Upcoming from '../assets/calendar_month.svg';
import todoHandler from './todohandler.js';

export class leftPanel {
    constructor() {
    }


    leftPanelAvatar() {

        const avatarImage = document.querySelector("#avatarimage");
        const avatarText = document.querySelector("#avatartext");

        avatarImage.src = Avatar;
        let greetingtext = '';

        if (new Date().getHours() < 13) {
            greetingtext = 'Good morning '
        } else {
            greetingtext = 'Good afternoon '
        }
        avatarText.textContent = greetingtext + " Mr. Right"

    };

    leftPanelTodo() {
        const leftPanelToDo = document.querySelector('#lc-todopanel-header');
        const leftPanelHeaderText = document.createElement('h1');
        const leftPanelHorizontalRule = document.createElement('hr');

        leftPanelHeaderText.textContent = "ToDo for You"
        leftPanelToDo.appendChild(leftPanelHeaderText);
        leftPanelToDo.appendChild(leftPanelHorizontalRule);
    }

    leftPanelProject() {
        const leftPanelProject = document.querySelector('#lc-projectpanel-header');
        const leftPanelHeaderText = document.createElement('h1');
        const leftPanelHorizontalRule = document.createElement('hr');

        leftPanelHeaderText.textContent = "Projects for You"
        leftPanelProject.appendChild(leftPanelHeaderText);
        leftPanelProject.appendChild(leftPanelHorizontalRule);


    }
    leftPanelTodoMenu() {

        addButton('addtodo   btn-container', 'btn-wrapper', 'btn-image', 'Add ToDo', AddTodo)
        addButton('today     btn-container', 'btn-wrapper', 'btn-image', 'Today', Today)
        addButton('upcoming  btn-container', 'btn-wrapper', 'btn-image', 'Upcoming', Upcoming)
        addButton('addproject  btn-container', 'btn-wrapper', 'btn-image', 'Add Project', AddTodo)

        function addButton(btnClass, btnWrapperClass, btnImageClass, btnText, btnImage) {
            let leftPanelItems = document.querySelector('#lc-todopanel-menu');
            let leftButton = document.createElement('button');
            let leftButtonDiv = document.createElement('div');
            let leftButtonImg = document.createElement('img');
            let leftButtonSpan = document.createElement('span');

            leftButton.className = btnClass;
            leftButtonDiv.className = btnWrapperClass;
            leftButtonImg.src = btnImage;
            leftButtonImg.className = btnImageClass;
            leftButtonSpan.innerText = btnText;

            leftButtonDiv.appendChild(leftButtonImg);
            leftButtonDiv.appendChild(leftButtonSpan);
            leftButton.appendChild(leftButtonDiv);
            leftPanelItems.appendChild(leftButton);

            leftButton.addEventListener('click', function () {
                todoHandler(this.className.split(" ")[0])
            })
        }
    }

    leftPanelProjects(projects) {
        projects.forEach((projects) => {
    
            addProject('btn-projects', projects.description);
            
        });

        function addProject(btnClass, btnText) {
            let leftPanelProjects = document.querySelector('#lc-projectpanel-menu');
            let leftButton = document.createElement('button');
        
            leftButton.className = btnClass;
            leftButton.innerText = btnText;
        
            leftPanelProjects.appendChild(leftButton)
        }
    }

}
