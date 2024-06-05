import { updateAllProjectDropdowns, updateTodoDropdown, showTodos, updateTodoInfo, setProjectDropdownSelect } from "./form";
import { updateSidebar } from "./DOM";
import { addProject, addTodo, deleteProject, deleteTodo, editTodo } from "./nonDOM";
import { projectList, defaultProject } from "./default";
import { loadTabHtml } from "./tabEvents";

const modals = document.querySelectorAll('.modal');
const dialogButtons = document.querySelectorAll('.dialog-button');

function hideModals() {
    modals.forEach(modal => {
        modal.classList.remove('visible');
        modal.close();
    });
}

function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('visible');
    modal.showModal();
}

function setModalOpen() {
    dialogButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modalID = button.dataset.modal;
            const formID = modalID + '-form';
            const form = document.getElementById(formID);

            form.reset();

            hideModals();
            showModal(modalID);
            
            showTodos();
            updateTodoDropdown(defaultProject.title);
            updateAllProjectDropdowns();
        });
    });
}

function setModalClose() {
    modals.forEach (modal => {
        const xButton = modal.querySelector('.close');
        xButton.addEventListener('click', (e) => {
            hideModals();
        });
    });
}

function setTodoModalOpen (button) {
    button.addEventListener('click', (e) => {
        const modalID = button.dataset.modal;
        const todoName = button.dataset.name;
        const projectName = button.dataset.project;

        updateTodoInfo(todoName, projectName);

        hideModals();
        showModal(modalID);
    });
}

function setAllTodoModalOpen () {
    const dialogButtons = document.querySelectorAll('.todo-info-button');
    dialogButtons.forEach(button => {
        setTodoModalOpen(button);
    });
}

function setAddTodoModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        const project = formData.get('projects');
        const name = formData.get('name');
        const description = formData.get('description');
        const date = formData.get('due-date');
        const priority = formData.get('priority-level');
        const notes = formData.get('note');

        addTodo(project, name, description, date, priority, notes);
        loadTabHtml('todos', project);
    });
}

function setEditTodoModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        const project = formData.get('projects');
        const name = formData.get('name');
        const description = formData.get('description');
        const date = formData.get('due-date');
        const priority = formData.get('priority-level');
        const notes = formData.get('note');

        editTodo(project, name, description, date, priority, notes);
        loadTabHtml('todos', project);
    });
}

function setAddProjectModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        const name = formData.get('name');

        addProject(name);
        loadTabHtml('todos', name);
        updateSidebar(projectList);
    });
}

function setDeleteModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        const type = formData.get('types');
        const project = formData.get('projects');
        const todo = formData.get('todos');
        const action = formData.get('actions');

        if (action == 'Delete') {
            deleteBasedOnType(type, project, todo);
        } else if (action == 'Modify') {
            openEditModal(type, project, todo);
        }
    });
}

function deleteBasedOnType (type, project, todo) {
    if (type == 'todo') {
        deleteTodo(project, todo);
        loadTabHtml('todos', project);
        updateTodoDropdown(project);
    } else if (type == 'project') {
        deleteProject(project);
        loadTabHtml('todos');
        updateSidebar(projectList);
    }
}

function openEditModal (type, projectName, todoName) {
    if (type == 'todo') {
        hideModals();
        showModal('edit-todo');

        updateAllProjectDropdowns();
        setProjectDropdownSelect(projectName);
        updateTodoInfo(todoName, projectName);
    }
}

function setAllModalSubmit () {
    const addTodoForm = document.getElementById('add-todo-form');
    setAddTodoModalSubmit(addTodoForm);

    const addProjectForm = document.getElementById('add-project-form');
    setAddProjectModalSubmit(addProjectForm);

    const deleteForm = document.getElementById('delete-form');
    setDeleteModalSubmit(deleteForm);

    const editTodoForm = document.getElementById('edit-todo-form');
    setEditTodoModalSubmit(editTodoForm);
}

function setAllModalEvents () {
    setModalOpen();
    setAllModalSubmit();
    setModalClose()
}

export { setAllModalEvents, setAllTodoModalOpen };