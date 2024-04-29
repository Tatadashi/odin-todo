import './style.css';
import './images/checkmark.png';
import {setAllTabOnClickEvents} from './otherJS/setAllTabOnClickEvents';

//dom js

setAllTabOnClickEvents();

const todoModal = document.getElementById('add-todo');
todoModal.addEventListener('click', (e) => {
    form.reset();
    dialog.showModal();
})

const form = document.querySelector(`form`);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const project = formData.get('project');

    dialog.close();
});

const closeModalButton = document.getElementById(`close`);
closeModalButton.addEventListener(`click`, (e) => {
    dialog.close();
});

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