import Icon from '../img/checkmark.png';
import { projectList } from './default';
import { findItemFromListByName, sortTodos } from './nonDOM';
import { setAllFormEvents, setTodoCheckMark } from './form';

//modal and tab events
function setDOMEvents () {
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
        if (project.finished) {
            myIcon.classList.add('visible');
        }
       
        projectDiv.appendChild(myIcon);

        projectDiv.classList.add('sidebar-project-div');

        sidebarProjects.appendChild(projectDiv);
    });
}

//Update content of todos tab to contain info of given project and its' todos 
function updateContent (projectName) {
    const project = findItemFromListByName(projectName, projectList);

    const projectTitle = document.getElementById('project-title');
    projectTitle.textContent = project.title;

    addSortButtonFunctionalty(project);
    generateTodos(project);
}

function generateTodos (project) {
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

function addSortButtonFunctionalty (project) {
    const sortButton = document.getElementById('sort-button');
    const sortCategoryDropdown = document.getElementById('sort-category');
    const sortOrderDropdown = document.getElementById('sort-order');

    let sortCategory = sortCategoryDropdown.value;
    sortCategoryDropdown.addEventListener('change', (e) => {
        sortCategory = sortCategoryDropdown.value;
    });

    let sortOrder = sortOrderDropdown.value;
    sortOrderDropdown.addEventListener('change', (e) => {
        sortOrder = sortOrderDropdown.value;
    });

    sortButton.addEventListener('click', (e) => {
        sortTodos(project, sortCategory, sortOrder);
        generateTodos(project);
    });
}

function createCheckbox () {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
}

export { setDOMEvents, updateSidebar, updateContent };