import { updateContent } from './DOM';
import { defaultProject } from './default';
import { setAllTodoModalOpen } from './modalEvents';

function loadTabHtml (tabName, projectName=defaultProject.title) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`, function() {
            if (tabName == 'todos') {
                updateContent(projectName);
                setAllTodoModalOpen();
            }
        });
     });
}

function setAllTabOnClickEvents () {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        const tabNameOnWebsite = tab.textContent.toLowerCase();
        tab.addEventListener('click', (e) => {
            loadTabHtml(tabNameOnWebsite);
        });
    });
}

export { setAllTabOnClickEvents, loadTabHtml };