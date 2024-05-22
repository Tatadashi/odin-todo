import { updateAllProjectDropdowns, updateTodoDropdown, showTodos } from "./form";
import { updateSidebar } from "./DOM";
import { addProject, addTodo, deleteProject, deleteTodo } from "./nonDOM";
import { projectList, defaultProject } from "./default";
import { loadTabHtml } from "./tabEvents";

function setAllCloseModalOnClick () {
    const closeModalButtons = document.querySelectorAll('.close');
    closeModalButtons.forEach(button => {
        button.addEventListener(`click`, (e) => {
            dialog.close();
        });
    });
}

function setOpenModalOnClick (button) {
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

function setAllOpenModalOnClick () {
    const dialogButtons = document.querySelectorAll('.dialog-button');
    dialogButtons.forEach(button => {
        setOpenModalOnClick(button);
    });
}

function setAddTodoModalSubmit (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const project = formData.get('projects');

        addTodo(name, project);
        loadTabHtml('todos', project);

        dialog.close();
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

        dialog.close();
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

        dialog.close();
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
    setAllOpenModalOnClick();
    setAllModalSubmit();
}

export { setAllModalEvents };