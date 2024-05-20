import { projectList, Todo, Project } from "./default";
import { findProjectFromListByName } from "./nonDOM";
import { updateSidebar } from "./DOM";
import { project1 } from "./default";

//show form being clicked, hide other 2 forms
function setFormButtons () {
    $('#add-todo').click(function() {
        $('#add-todo-form').show();
        $('#add-project-form').hide();
        $('#delete-form').hide();
    });
    $('#add-project').click(function() {
        $('#add-project-form').show();
        $('#add-todo-form').hide();
        $('#delete-form').hide();
    });
    $('#delete').click(function() {
        $('#add-project-form').hide();
        $('#add-todo-form').hide();
        $('#delete-form').show();
    });
}

function setAllFormEvents () {
    setDeleteFormEvents();
    setFormButtons();
}

function updateAllProjectDropdowns () {
    const dropdowns = document.querySelectorAll('.project-list');
    dropdowns.forEach(dropdown => {
        fillDropdownWithList(dropdown, projectList);
    });
}

//shows todo question based on dropdown
function checkDeleteType (value) {
    let deleteType = {
        'todo' : showTodos,
        'project': hideTodos
    };

    //call function stored in key value
    deleteType[value]();
}

function showTodos () {
    $('#modify-todo-question').show();
}

function hideTodos () {
    $('#modify-todo-question').hide();
}

function setDeleteFormEvents () {
    setProjectDropdownEvent();
    setDeleteTypeDropdownEvent();
}

function setProjectDropdownEvent () {
    const dropdown = document.getElementById('modify-project');

    //default todoDropdown
    updateTodoDropdown(project1.title);
    
    dropdown.addEventListener('change', (e) => {
        updateTodoDropdown(dropdown.value)
    });
}

function setDeleteTypeDropdownEvent () {
    const dropdown = document.getElementById('delete-type');
    dropdown.addEventListener('change', (e) => {
        checkDeleteType(dropdown.value);
    });
}

function updateTodoDropdown (projectName) {
    const project = findProjectFromListByName(projectName, projectList);
    const projectTodos = project.todoList;
    const dropdown = document.getElementById('modify-todo');
    
    fillDropdownWithList(dropdown, projectTodos);
}

function fillDropdownWithList (dropdown, list) {
    dropdown.innerHTML = '';

    list.forEach(todo => {
        const option = document.createElement('option');
        option.value = todo.title;
        option.innerHTML = todo.title;

        dropdown.appendChild(option);
    });
}

function addTodo (todoName, projectName) {
    const newTodo = new Todo(todoName, 'default descrip', 'default due date', 'default prio', 'default note')

    const chosenProject = findProjectFromListByName(projectName, projectList);

    let newTodoList = chosenProject.todoList;
    newTodoList.push(newTodo);

    chosenProject.changeProperty('todoList', newTodoList);    
}

function addProject (projectName) {
    const newProject = new Project(projectName);
    projectList.push(newProject);
    updateSidebar(projectList);
}

export { updateAllProjectDropdowns, addTodo, addProject, setAllFormEvents };