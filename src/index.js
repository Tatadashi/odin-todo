import './style.css';
import './images/checkmark.png';
import {setAllTabOnClickEvents} from './otherJS/setAllTabOnClickEvents';

//dom js

setAllTabOnClickEvents();

// //non dom js

// class ToDo {
//     //will create toDo from form data
//     constructor (title, description, dueDate, priority, notes) {
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.notes = notes;
//     }

//     changeProperty (property, newInfo) {
//         this[property] = newInfo;
//     }
// }

// class Project {
//     constructor (title, toDoList) {
//         this.title = title;
//         this.toDoList = toDoList;
//     }

//     changeProperty (property, newInfo) {
//         this[property] = newInfo;
//     }
// }

// const item1 = new ToDo('clean', 'cleaning', '12/02/2004', 'high', 'room');
// const item2 = new ToDo('hw', 'solving', '11/03/2013', 'low', 'math');

// item1.changeProperty('description', 'jon');

// const list = [item1, item2];

// const project = new Project('school', list);

// project.changeProperty('title', 'college');

// console.log(project);