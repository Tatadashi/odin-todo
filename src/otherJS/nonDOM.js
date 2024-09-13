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
        storeProjectListToLocalStorage();
    } else {
        alert('Todo Creation Failed: name already exists');
    }
}

function addProject (projectName) {
    const newProject = new Project(projectName);

    if (checkIfUniqueName(projectName, projectList)) {
        projectList.push(newProject);
        storeProjectListToLocalStorage();
    } else {
        alert('Creation Failed: name already exists');
    }
}

function editProject (projectName) {
    const projectInputElement = document.getElementById('project-name-edit-input');
    const projectOriginalName = projectInputElement.dataset.originalName;
    const project = findItemFromListByName(projectOriginalName, projectList);

    if (checkIfUniqueName(projectName, projectList)) {
        project.title = projectName;
        storeProjectListToLocalStorage();
    } else {
        alert('Edit Failed: name already exists');
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

    storeProjectListToLocalStorage();
}

function deleteProject (projectName) {
    const project = findItemFromListByName(projectName, projectList);
    let index = projectList.indexOf(project)
    
    index = checkIfDefaultProject(project, index);
    
    projectList.splice(index, 1);

    storeProjectListToLocalStorage();
}

function deleteTodo (projectName, todoName) {
    const project = findItemFromListByName(projectName, projectList);
    const todo = findItemFromListByName(todoName, project.todoList);
    const index = project.todoList.indexOf(todo);

    project.todoList.splice(index, 1);

    storeProjectListToLocalStorage();
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

function sortTodos (project, sortCategory, sortOrder) {
    if (sortCategory == 'priority') {
        project.todoList = sortByPriority(project.todoList, sortOrder);
    } else if (sortCategory == 'name') {
        project.todoList = sortByName(project.todoList, sortOrder);
    }

    storeProjectListToLocalStorage();
}

function changePriorityPropertyToInteger (object) {
    switch (object.priority) {
        case 'min':
            object.priority = 1;
            break;
        case 'low':
            object.priority = 2;
            break;
        case 'medium':
            object.priority = 3;
            break;
        case 'high':
            object.priority = 4;
            break;
        case 'max':
            object.priority = 5;
            break;
        default:
            console.log('priority not converted to integer');
            break;
    }
}

function changePriorityPropertyToString (object) {
    switch (object.priority) {
        case 1:
            object.priority = 'min';
            break;
        case 2:
            object.priority = 'low';
            break;
        case 3:
            object.priority = 'medium';
            break;
        case 4:
            object.priority = 'high';
            break;
        case 5:
            object.priority = 'max';
            break;
        default:
            console.log('priority not converted to string');
            break;
    }
}

function sortByPriority(todoList, sortOrder) {
    todoList.forEach(todo => {
        changePriorityPropertyToInteger(todo);
    });

    let todoListPrioritysOnly = [];
    for (let i = 0; i < todoList.length; i++) {
        const todoPriority = todoList[i].priority;
        todoListPrioritysOnly.push(todoPriority);
    }

    todoListPrioritysOnly = todoListPrioritysOnly.sort();
    if (sortOrder == 'descending') {
        todoListPrioritysOnly = todoListPrioritysOnly.sort().toReversed();
    }

    let newTodoList = [];
    for (let i = 0; i < todoList.length; i++) {
        for (let j = 0; j < todoList.length; j++) {
            if (todoListPrioritysOnly[i] == todoList[j].priority) {
                newTodoList.push(todoList[j]);
                todoList[j] = 0;
            }
        }
    }

    newTodoList.forEach(todo => {
        changePriorityPropertyToString(todo);
    });

    return newTodoList;
}

function sortByName (todoList, sortOrder) {
    let todoListNamesOnly = [];
    for (let i = 0; i < todoList.length; i++) {
        const todoName = todoList[i].title;
        todoListNamesOnly.push(todoName);
    }

    todoListNamesOnly = todoListNamesOnly.sort();
    if (sortOrder == 'descending') {
        todoListNamesOnly = todoListNamesOnly.sort().toReversed();
    }

    let newTodoList = [];
    for (let i = 0; i < todoList.length; i++) {
        for (let j = 0; j < todoList.length; j++) {
            if (todoListNamesOnly[i] == todoList[j].title) {
                newTodoList.push(todoList[j]);
            }
        }
    }

    return newTodoList;
}

function storeProjectListToLocalStorage () {
    localStorage.clear();
    projectList.forEach(project => {
        const project_serialized = JSON.stringify(project);
        localStorage.setItem(`${project.title}`, project_serialized);
    });
}

//clears projectList except 1st project, reassigns defaultProject to it
function clearProjectList () {
    projectList.forEach(project => {
        let index = projectList.indexOf(project)
        index = checkIfDefaultProject(project, index);
        projectList.splice(index, 1);
    });
}

function convertLocalObjectsToSpecificObject (localObject, objectType, todoList=[]) {
    if (objectType == 'project') {
        let title = localObject.title;
        let finished = localObject.finished;
        
        let returnProject = new Project(title, todoList, finished);
        return returnProject;
    } else {
        let title = localObject.title;
        let description = localObject.description;
        let dueDate = localObject.dueDate;
        let priority = localObject.priority;
        let notes = localObject.notes;
        let finished = localObject.finished;
        
        let returnTodo = new Todo(title, description, dueDate, priority, notes, finished);
        return returnTodo;
    }
}

function setProjectListToLocalStorage () {
    const projects = {...localStorage};
    const numberOfProjectsInLocal = Object.keys(projects).length;
    clearProjectList();

    for (let i = 0; i < numberOfProjectsInLocal; i++) {
        let project_unserialized = JSON.parse(localStorage.getItem(`${Object.keys(projects)[i]}`));

        let convertedTodoList = [];
        project_unserialized.todoList.forEach(todo => {
            convertedTodoList.push(convertLocalObjectsToSpecificObject(todo, 'todo'));
        });
        let convertedProject = convertLocalObjectsToSpecificObject(project_unserialized, 'project', convertedTodoList);

        projectList.push(convertedProject);
    }

    let index = checkIfDefaultProject(projectList[0], 0);
    projectList.splice(index, 1);
}

export { findItemFromListByName, addTodo, addProject, deleteProject, deleteTodo, editTodo, editProject, sortTodos, storeProjectListToLocalStorage, setProjectListToLocalStorage };