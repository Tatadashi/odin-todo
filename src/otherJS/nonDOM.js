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

function checkIfUniqueName (name, list) {
    if (findItemFromListByName(name, list) == null) {
        return true;
    } else {
        return false;
    }
}

function addTodo (projectName, todoName, description, dueDate, priority, note) {
    const newTodo = new Todo(todoName, description, dueDate, priority, note);
    const chosenProject = findItemFromListByName(projectName, projectList);
    let newTodoList = chosenProject.todoList;

    if (checkIfUniqueName(todoName, newTodoList)) {
        newTodoList.push(newTodo);
        chosenProject.changeProperty('todoList', newTodoList); 
    } else {
        alert('Todo Creation Failed: name already exists');
    }
}

function addProject (projectName) {
    const newProject = new Project(projectName);

    if (checkIfUniqueName(projectName, projectList)) {
        projectList.push(newProject);
    } else {
        alert('Creation Failed: name already exists');
    }
}

function editTodo (projectName, todoName, description, dueDate, priority, note) {
    const editTodoNameElement = document.getElementById('todo-name-edit-input');
    const todoOriginalName = editTodoNameElement.dataset.originalName;
    const todoOriginalProjectName = editTodoNameElement.dataset.originalProject;

    const todoOriginalProject = findItemFromListByName(todoOriginalProjectName, projectList);
    const todo = findItemFromListByName(todoOriginalName, todoOriginalProject.todoList);
    const project = findItemFromListByName(projectName, projectList);

    if (checkIfUniqueName(todoName, project.todoList)) {
        //new name, same project
        editTodoInfo(todo, todoName, description, dueDate, priority, note);

        //new name, new project or same name, new project
        if (todoOriginalProjectName !== project.title) {
            addTodo(projectName, todoName, description, dueDate, priority, note);
            deleteTodo(todoOriginalProjectName, todoOriginalName);
        }
    //same name, same project
    } else if (todoOriginalName == todoName && todoOriginalProjectName == project.title) {
        editTodoInfo(todo, todoName, description, dueDate, priority, note);
    } else {
        alert('Edit Fail: todo name exists already in selected project')
    }
}

function editTodoInfo (todo, newTodoName, newDescription, newDueDate, newPriority, newNote) {
    todo.changeProperty('title', newTodoName);
    todo.changeProperty('description', newDescription);
    todo.changeProperty('dueDate', newDueDate);
    todo.changeProperty('priority', newPriority);
    todo.changeProperty('notes', newNote);
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

//have new project copy everything from old project
function copyProject (newProject, oldProject) {
    newProject.changeProperty('title', oldProject.title);
    newProject.changeProperty('todoList', oldProject.todoList);
}

function getFirstNonDefaultProject () {
    let i = 0;
    let project = projectList[i]
    while (project == defaultProject) {
        project = projectList[i++];
    }

    return project;
}

export { findItemFromListByName, addTodo, addProject, deleteProject, deleteTodo, editTodo };