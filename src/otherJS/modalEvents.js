import { loadTabHtml } from "./tabEvents";
import { updateAllProjectDropdowns, addProject, addTodo } from "./form";

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
        const project = formData.get('project');

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

        dialog.close();
    });
}

//deletefunctionsubmit

function setAllModalSubmit () {
    const addTodoForm = document.getElementById('add-todo-form');
    setAddTodoModalSubmit(addTodoForm);

    const addProjectForm = document.getElementById('add-project-form');
    setAddProjectModalSubmit(addProjectForm);
}

function setAllModalEvents () {
    setAllCloseModalOnClick();
    setAllOpenModalOnClick();
    setAllModalSubmit();
}

export { setAllModalEvents };