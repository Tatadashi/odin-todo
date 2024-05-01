import './style.css';
import './images/checkmark.png';
import {setDOMEvents} from './otherJS/DOM';

setDOMEvents();

function updateSidebar (projectList) {
    //first child of #sidebar is where projects located
    const sidebarProjects = document.getElementById('sidebar').children[0];
    sidebarProjects.innerHTML = '';
    
    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project')
        projectDiv.innerHTML = project.title;
        // project.toDoList.forEach(todo => {
        //     //code with content todo names
        // });
        sidebarProjects.appendChild(projectDiv);
    });
}

class ToDo {
    //will create toDo from form data
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

class Project {
    constructor (title, toDoList) {
        this.title = title;
        this.toDoList = toDoList;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

//default
const item1 = new ToDo('clean', 'cleaning', '12/02/2004', 'high', 'room');
const item2 = new ToDo('hw', 'solving', '11/03/2013', 'low', 'math');
const todoList = [item1, item2];
const project1 = new Project('school', todoList);
const project2 = new Project('home', todoList);
const projectList = [project1, project2];

updateSidebar(projectList);

// project.changeProperty('title', 'college');
// item1.changeProperty('description', 'jon');

// console.log(project);