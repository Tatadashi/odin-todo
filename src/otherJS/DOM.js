import Icon from './checkmark.png';
import { setAllTabOnClickEvents, loadTabHtml } from './tabEvents';
import { setAllModalEvents } from './modalEvents';
import { projectList } from './default';
import { findItemFromListByName } from './nonDOM';
import { setAllFormEvents, setTodoCheckMark } from './form';

//modal and tab events
function setDOMEvents () {
    setAllTabOnClickEvents();
    setAllModalEvents();
    setAllFormEvents();
    updateSidebar(projectList);
}

//Update sidebar DOM to include all projects in given list with on click event to show content
function updateSidebar (projectList) {
    //first child of #sidebar is where projects located
    const sidebarProjects = document.getElementById('sidebar').children[0];
    sidebarProjects.innerHTML = '';
    
    projectList.forEach(project => {

        const projectDiv = document.createElement('div');
        const projectHeader = document.createElement('h1');

        projectHeader.textContent = project.title;
        projectDiv.appendChild(projectHeader);

        const myIcon = new Image();
        myIcon.src = Icon;
        
        projectDiv.appendChild(myIcon);

        projectDiv.addEventListener('click', (e) => {
            loadTabHtml('todos', project.title)
        });
       
        sidebarProjects.appendChild(projectDiv);
    });
}

//Update content of todos tab to contain info of given project and its' todos 
function updateContent (projectName) {
    const project = findItemFromListByName(projectName, projectList);

    const projectTitle = document.getElementById('project-title');
    projectTitle.textContent = project.title;

    const projectCheckBox = document.getElementById('project-check-box');
    projectCheckBox.name = project.title;

    const projectTodosDiv = document.getElementById('todos').children[1];
    projectTodosDiv.innerHTML = '';

    const projectTodos = document.createElement('ul');
    project.todoList.forEach(todo => {

        const todoContainer = document.createElement('li');
        const todoItem = document.createElement('div');

        todoItem.textContent = todo.title;
        todoItem.dataset.modal = 'todo-info';
        todoItem.dataset.project = project.title;
        todoItem.dataset.name = todo.title;
        todoItem.classList.add('todo-info-button');
        todoItem.classList.add(todo.priority + '-priority');

        todoContainer.classList.add('checkbox-container');
        todoContainer.appendChild(todoItem);

        const checkbox = createCheckbox();
        todoContainer.appendChild(checkbox);
        setTodoCheckMark(todo, todoContainer);

        projectTodos.appendChild(todoContainer);
    });

    projectTodosDiv.appendChild(projectTodos);
}

function createCheckbox () {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
}

export { setDOMEvents, updateSidebar, updateContent };