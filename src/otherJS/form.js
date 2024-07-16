import { projectList } from "./default";
import { findItemFromListByName } from "./nonDOM";
import { defaultProject } from "./default";

function setAllFormEvents () {
    setDeleteFormEvents();
}

function updateAllProjectDropdowns () {
    const dropdowns = document.querySelectorAll('.project-list');
    dropdowns.forEach(dropdown => {
        fillDropdownWithList(dropdown, projectList);
    });
}

function setProjectDropdownSelect (valueSelected) {
    const dropdown = document.getElementById('project-list-edit');
    dropdown.value = valueSelected;
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
    updateTodoDropdown(defaultProject.title);
}

function hideTodos () {
    $('#modify-todo-question').hide();
}

function setDeleteFormEvents () {
    setDeleteTypeDropdownEvent();
    setActionTypeDropdownEvent();
    setProjectDropdownEvent()
}

function setProjectDropdownEvent () {
    const dropdown = document.getElementById('modify-project');
    
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

function setActionTypeDropdownEvent () {
    const dropdown = document.getElementById('action-type');
    const button = document.getElementById('delete-button');
    dropdown.addEventListener('change', (e) => {
        button.textContent = dropdown.value;
    });
}

function updateTodoDropdown (projectName) {
    const project = findItemFromListByName(projectName, projectList);
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

function updateTodoInfo (todoName, projectName) {
    const project = findItemFromListByName(projectName, projectList);
    const todo = findItemFromListByName(todoName, project.todoList);

    const todoNameElements = document.querySelectorAll('.todo-name');
    const todoDescriptionElements = document.querySelectorAll('.todo-description');
    const todoDueDateElements = document.querySelectorAll('.todo-due-date');
    const todoPriorityElement = document.querySelector('.todo-priority');
    const todoNoteElements = document.querySelectorAll('.todo-note');

    //textContent is for todoInfo modal, value is for todoEdit modal
    todoNameElements.forEach(element => {
        element.textContent = todo.title;
        element.value = todo.title;

        element.dataset.originalProject = project.title;
        element.dataset.originalName = todo.title;
    });
    
    todoDescriptionElements.forEach(element => {
        element.textContent = todo.description;
        element.value = todo.description;
    });
    
    todoDueDateElements.forEach(element => {
        element.textContent = todo.dueDate;
        element.value = todo.dueDate;
    });
    
    //textContent deletes children of dropdown
    todoPriorityElement.textContent = todo.priority;
    setPriorityInputDropdown(todo.priority);

    todoNoteElements.forEach(element => {
        element.textContent = todo.notes;
        element.value = todo.notes;
    });
}

function showProjectNameInput (projectName) {
    const projectInputElement = document.getElementById('project-name-edit-input');

    projectInputElement.value = projectName;
    projectInputElement.dataset.originalName = projectName;
}

function setPriorityInputDropdown (valueSelected = 'min') {
    const dropdowns = document.querySelectorAll('.priority-input');
    dropdowns.forEach(dropdown => {
        dropdown.value = valueSelected;
        setPriorityInputColor(dropdown);
    });
}

function setPriorityInputColor (dropdown) {
    dropdown.addEventListener('change', (e) => {
        const priorityString = dropdown.value.toLowerCase() + '-priority';
        dropdown.className = priorityString;
        dropdown.classList.add('priority-input');
    });

    dropdown.dispatchEvent(new Event('change'));
}

//not
function setProjectCheckMark () {
    const projectCheckbox = document.getElementById('project-check-box');
    const projectName = projectCheckbox.name;
    const project = findItemFromListByName(projectName, projectList);

    if (project.finished) {
        projectCheckbox.checked = project.finished;
        toggleAllTodosCheckMarks(project);
    }

    setProjectOnCheck(projectCheckbox, project);
}

//nothere
function setProjectOnCheck (checkbox, project) {
    checkbox.addEventListener('change', (e) => {
        toggleProjectCheckMarks(checkbox, project);
        toggleAllTodosCheckMarks(project);
    });
}

//now
function toggleProjectCheckMarks (checkbox, project, type = !project.finished) {
    project.finished = type;
    checkbox.checked = type;
}

//nothere
function toggleAllTodosCheckMarks (project) {
    const todoCheckboxes = document.querySelectorAll('.checkbox-container input');
    todoCheckboxes.forEach(todoCheckbox => {
        todoCheckbox.checked = project.finished;
    });

    project.todoList.forEach(todo => {
        todo.finished = project.finished;
    });
}

//nothere
function setTodoCheckMark (todo, container) {
    const todoCheckbox = container.querySelector('input');
    todoCheckbox.checked = todo.finished;

    setTodoOnCheck(todoCheckbox, todo);}

//nothere
function setTodoOnCheck (checkbox, todo) {
    const projectCheckbox = document.getElementById('project-check-box');
    const projectName = projectCheckbox.name;
    const project = findItemFromListByName(projectName, projectList);

    checkbox.addEventListener('change', (e) => {
        todo.finished = checkbox.checked;

        if (!todo.finished) {
            toggleProjectCheckMarks(projectCheckbox, project, false);
        } else if (checkIfAllTodosChecked(project)) {
            toggleProjectCheckMarks(projectCheckbox, project, true);
        }
    });
}

function checkIfAllTodosChecked (project) {
    let allTodoFinished = true;
    project.todoList.forEach(todo => {
        if (!todo.finished) {
            allTodoFinished = false;
        }
    });

    return allTodoFinished;
}

export { updateAllProjectDropdowns, setAllFormEvents, updateTodoDropdown, showTodos, updateTodoInfo, setProjectDropdownSelect, showProjectNameInput, setPriorityInputDropdown, setProjectCheckMark, setTodoCheckMark };