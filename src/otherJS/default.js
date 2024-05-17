import { updateSidebar } from "./DOM";

class Todo {
    //will create toDo from form data
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

class Project {
    constructor (title, todoList = []) {
        this.title = title;
        this.todoList = todoList;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

//default
const item1 = new Todo('clean', 'cleaning', '12/02/2004', 'high', 'room');
const item2 = new Todo('hw', 'solving', '11/03/2013', 'low', 'math');
const item3 = new Todo('game', 'gaming', '01/13/2029', 'max', 'fun');
const todoList = [item1, item2];
const todoList2 = [item1, item3];
const project1 = new Project('school', todoList);
const project2 = new Project('home', todoList2);

//test change todoList
const todoList3 = [item3, item2];
project2.changeProperty('todoList', todoList3);

const projectList = [project1, project2];

updateSidebar(projectList);

export {projectList, project1, Todo, Project};

// project.changeProperty('title', 'college');
// item1.changeProperty('description', 'jon');