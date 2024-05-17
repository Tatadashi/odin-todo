import { projectList, Todo, Project } from "./default";
import { findProjectFromListByName } from "./nonDOM";
import { updateSidebar } from "./DOM";

function updateProjectDropdown (projectList) {
    const dropdown = document.getElementById('project-list');
    dropdown.innerHTML = '';

    projectList.forEach(project => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;

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

export { updateProjectDropdown, addTodo, addProject };