import {updateTodoInfo} from "./form";

const modals = document.querySelectorAll('.modal');

//same as modalEvents (no import because circular dependency)
function hideModals() {
    modals.forEach(modal => {
        modal.classList.remove('visible');
        modal.close();
    });
}

//same as modalEvents (no import because circular dependency)

function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('visible');
    modal.showModal();
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

export { setAllTodoModalOpen };