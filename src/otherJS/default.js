class ToDo {
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
    constructor (title, todoList) {
        this.title = title;
        this.todoList = todoList;
    }

    changeProperty (property, newInfo) {
        this[property] = newInfo;
    }
}

//default
const item1 = new ToDo('clean', 'cleaning', '12/02/2004', 'high', 'room');
const item2 = new ToDo('hw', 'solving', '11/03/2013', 'low', 'math');
const todoList = [item1, item2];
const project1 = new Project('school', todoList);
const project2 = new Project('home', todoList);
const projectList = [project1, project2];

export {projectList, project1};

// project.changeProperty('title', 'college');
// item1.changeProperty('description', 'jon');