import { updateAllProjectDropdowns, updateTodoDropdown, showTodos } from "./form";
import { updateSidebar } from "./DOM";
import { addProject, addTodo, deleteProject, deleteTodo } from "./nonDOM";
import { projectList, defaultProject } from "./default";
import { loadTabHtml } from "./tabEvents";

function setAllCloseModalOnClick () {
    const closeModalButtons = document.querySelectorAll('.close');
    closeModalButtons.forEach(button => {
        button.addEventListener(`click`, (e) => {
            dialogSidebar.close();
        });
    });
}

function setSidebarOpenModalOnClick (button) {
    button.addEventListener('click', (e) => {
        const formID = button.id + '-form';
        const form = document.getElementById(formID);
        form.reset();
        dialog.showModal();
        showTodos();
        updateTodoDropdown(defaultProject.title);
        updateAllProjectDropdowns();
    });
}

function setTodoOpenModalOnClick (button) {
    button.addEventListener('click', (e) => {
        eep.showModal();
    });
}

function setAllTodoOpenModalOnClick () {
    const dialogButtons = document.querySelectorAll('.todo-info-button');
    dialogButtons.forEach(button => {
        setTodoOpenModalOnClick(button);
    });
}

function setAllSidebarOpenModalOnClick () {
    const dialogButtons = document.querySelectorAll('.sidebar-dialog-button');
    dialogButtons.forEach(button => {
        setSidebarOpenModalOnClick(button);
    });
}

function setAddTodoModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const project = formData.get('projects');
        const name = formData.get('name');
        const description = formData.get('description');
        const date = formData.get('due-date');
        const priority = formData.get('priority-level');
        const notes = formData.get('note');

        addTodo(project, name, description, date, priority, notes);
        loadTabHtml('todos', project);

        dialogSidebar.close();
    });
}

function setAddProjectModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');

        addProject(name);
        loadTabHtml('todos', name);
        updateSidebar(projectList);

        dialogSidebar.close();
    });
}

function setDeleteModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const type = formData.get('types');
        const project = formData.get('projects');
        const todo = formData.get('todos');

        if (type == 'todo') {
            deleteTodo(project, todo);
            loadTabHtml('todos', project);
            updateTodoDropdown(project);
        } else if (type == 'project') {
            deleteProject(project);
            loadTabHtml('todos');
            updateSidebar(projectList);
        }

        dialogSidebar.close();
    });
}

function setAllModalSubmit () {
    const addTodoForm = document.getElementById('add-todo-form');
    setAddTodoModalSubmit(addTodoForm);

    const addProjectForm = document.getElementById('add-project-form');
    setAddProjectModalSubmit(addProjectForm);

    const deleteForm = document.getElementById('delete-form');
    setDeleteModalSubmit(deleteForm);
}

function setAllModalEvents () {
    setAllCloseModalOnClick();
    setAllSidebarOpenModalOnClick();
    setAllModalSubmit();
}

export { setAllModalEvents, setAllTodoOpenModalOnClick };