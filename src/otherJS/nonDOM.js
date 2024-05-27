import { projectList, Project, Todo, defaultProject } from "./default";

function findItemFromListByName (itemName, list) {
    let chosenItem;
    list.forEach(item => {
        if (item.title == itemName) {
            chosenItem = item;
        }
    });

    return chosenItem;
}

function addTodo (projectName, todoName, description, dueDate, priority, note) {
    const newTodo = new Todo(todoName, description, dueDate, priority, note);

    const chosenProject = findItemFromListByName(projectName, projectList);

    let newTodoList = chosenProject.todoList;
    newTodoList.push(newTodo);

    chosenProject.changeProperty('todoList', newTodoList);    
}

function addProject (projectName) {
    const newProject = new Project(projectName);
    projectList.push(newProject);
}

function deleteProject (projectName) {
    const project = findItemFromListByName(projectName, projectList);
    let index = projectList.indexOf(project)
    
    index = checkIfDefaultProject(project, index);
    
    projectList.splice(index, 1);
}

function deleteTodo (projectName, todoName) {
    const project = findItemFromListByName(projectName, projectList);
    const todo = findItemFromListByName(todoName, project.todoList);
    const index = project.todoList.indexOf(todo);

    project.todoList.splice(index, 1);
}

//change index if default since don't want defaultProject to be deleted (but its content will change to resemble deleted project)
function checkIfDefaultProject (project, index) {
    if (project == defaultProject) {
        index = reassignDefaultProject();
    }
    return index;
}

//do not want to delete default but copy nearest nondefault (or create one if not exist), then delete that one
function reassignDefaultProject () {
    if (projectList.length == 1) {
        addProject('EMPTY-PROJECT');
    }

    const projectBeingCopied = getFirstNonDefaultProject();
    const indexOfCopiedProject = projectList.indexOf(projectBeingCopied);

    copyProject(defaultProject, projectBeingCopied);

    return indexOfCopiedProject;
}

//have new object copy everything to old project
function copyProject (oldProject, newProject) {
    oldProject.changeProperty('title', newProject.title);
    oldProject.changeProperty('todoList', newProject.todoList);
}

function getFirstNonDefaultProject () {
    let i = 0;
    let project = projectList[i]
    while (project == defaultProject) {
        project = projectList[i++];
    }

    return project;
}

export { findItemFromListByName, addTodo, addProject, deleteProject, deleteTodo };