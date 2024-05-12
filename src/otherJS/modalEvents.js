import { projectList } from "./default";

function setCloseModalOnClick () {
    const closeModalButton = document.getElementById(`close`);
    closeModalButton.addEventListener(`click`, (e) => {
        dialog.close();
    });
}

function setOpenModalOnClick () {
    const form = document.querySelector('form');
    const todoModal = document.getElementById('add-todo');
    todoModal.addEventListener('click', (e) => {
        form.reset();
        dialog.showModal();
        updateProjectDropdown(projectList);
    });
}

function updateProjectDropdown (projectList) {
    const dropdown = document.getElementById('project-list');
    dropdown.innerHTML = '';

    projectList.forEach(project => {
        const option = document.createElement('option');
        option.value = project.title;
        option.innerHTML = project.title;

        dropdown.appendChild(option);
    });
}

function setModalSubmit () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        //prob another function
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const project = formData.get('project');

        dialog.close();
    });
}

function setAllModalEvents () {
    setCloseModalOnClick();
    setOpenModalOnClick();
    setModalSubmit();
}

export {setAllModalEvents};