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

const defaultTodo1 = new Todo('clean', 'cleaning', '2004-10-01', 'high', 'room');
const defaultTodo2 = new Todo('hw', 'solving', '2013-12-21', 'low', 'math');
const defaultTodoList = [defaultTodo1, defaultTodo2];
defaultProject.changeProperty('todoList', defaultTodoList);


const project1 = new Project('home');
const project1Todo1 = new Todo('game', 'gaming', '2029-03-03', 'max', 'fun');
const project1Todo2 = new Todo('clean', 'cleaning', '2004-10-01', 'high', 'room');
const project1TodoList = [project1Todo1, project1Todo2];
project1.changeProperty('todoList', project1TodoList);

const project2 = new Project('stuff');
const project2Todo1 = new Todo('hw', 'solving', '2013-12-21', 'low', 'math');
const project2Todo2 = new Todo('game', 'gaming', '2029-03-03', 'max', 'fun');
const project2TodoList = [project2Todo1, project2Todo2];
project2.changeProperty('todoList', project2TodoList);

projectList.push(project1);
projectList.push(project2);

export {projectList, defaultProject, Todo, Project};