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