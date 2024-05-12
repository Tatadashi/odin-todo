import {setAllTabOnClickEvents} from './tabEvents';
import {setAllModalEvents} from './modalEvents';

function setDOMEvents () {
    setAllTabOnClickEvents();
    setAllModalEvents();
}

//Update sidebar DOM to include all projects in given list
function updateSidebar (projectList) {
    //first child of #sidebar is where projects located
    const sidebarProjects = document.getElementById('sidebar').children[0];
    sidebarProjects.innerHTML = '';
    
    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project')
        projectDiv.textContent = project.title;
       
        sidebarProjects.appendChild(projectDiv);
    });
}

//Update content of todos tab to contain info of given project and its' todos 
function updateContent (project) {
    const projectTitle = document.getElementById('project-title');
    projectTitle.textContent = project.title;


    const projectTodosDiv = document.getElementById('todos').children[1];
    projectTodosDiv.innerHTML = '';

    const projectTodos = document.createElement('ul');
    project.todoList.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.title;
        projectTodos.appendChild(todoItem);
    });

    projectTodosDiv.appendChild(projectTodos);

}

export {setDOMEvents, updateSidebar, updateContent};