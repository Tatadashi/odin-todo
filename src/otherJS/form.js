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
    setProjectDropdownEvent();
    setDeleteTypeDropdownEvent();
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

export { updateAllProjectDropdowns, setAllFormEvents, updateTodoDropdown, showTodos };