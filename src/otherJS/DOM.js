import { setAllTabOnClickEvents, loadTabHtml } from './tabEvents';
import { setAllModalEvents } from './modalEvents';
import { Todo, projectList } from './default';

//modal and tab events
function setDOMEvents () {
    setAllTabOnClickEvents();
    setAllModalEvents();
}

//Update sidebar DOM to include all projects in given list with on click event to show content
function updateSidebar (projectList) {
    //first child of #sidebar is where projects located
    const sidebarProjects = document.getElementById('sidebar').children[0];
    sidebarProjects.innerHTML = '';
    
    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project')
        projectDiv.textContent = project.title;

        projectDiv.addEventListener('click', (e) => {
            loadTabHtml('todos', project.title)
        });
       
        sidebarProjects.appendChild(projectDiv);
    });
}

//Update content of todos tab to contain info of given project and its' todos 
function updateContent (projectName) {
    const project = findProjectFromListByName(projectName, projectList);

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

function findProjectFromListByName (projectName, list) {
    let chosenProject;
    projectList.forEach(project => {
        if (project.title == projectName) {
            chosenProject = project;
        }
    });

    return chosenProject;
}

function addTodo (todoName, projectName) {
    const newTodo = new Todo(todoName, 'default descrip', 'default due date', 'default prio', 'default note')

    const chosenProject = findProjectFromListByName(projectName, projectList);

    let newTodoList = chosenProject.todoList;
    newTodoList.push(newTodo);

    chosenProject.changeProperty('todoList', newTodoList);    
}

export { setDOMEvents, updateSidebar, updateContent, addTodo };