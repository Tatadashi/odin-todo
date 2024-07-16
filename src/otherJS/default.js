import { addTodo, addProject } from "./nonDOM";
import { updateSidebar } from "./DOM";

class Todo {
    constructor (title, description, dueDate, priority, notes, finished = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.finished = finished;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

class Project {
    constructor (title, todoList = [], finished = false) {
        this.title = title;
        this.todoList = todoList;
        this.finished = finished;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

//default
const defaultProject = new Project('school');
const projectList = [defaultProject];

addTodo('school','clean', 'cleaning', '2004-10-01', 'high', 'room');
addTodo('school','hw', 'solving', '2013-12-21', 'low', 'math');

addProject('home');
addTodo('home','game', 'gaming', '2029-03-03', 'max', 'fun');
addTodo('home','clean', 'cleaning', '2004-10-01', 'high', 'room');

addProject('stuff');
addTodo('stuff','hw', 'solving', '2013-12-21', 'low', 'math');
addTodo('stuff','game', 'gaming', '2029-03-03', 'max', 'fun');

//updateSidebar here causes bug, likely not circular dependency, 
updateSidebar(projectList);

export {projectList, defaultProject, Todo, Project};

// project.changeProperty('title', 'college');
// item1.changeProperty('description', 'jon');