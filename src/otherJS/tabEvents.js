import { updateContent, updateSidebar } from './DOM';
import { defaultProject, projectList } from './default';
import { setAllTodoModalOpen } from './modalEvents';
import { setProjectCheckMark } from './form';

function loadTabHtml (tabName, projectName=defaultProject.title) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`, function() {
            if (tabName == 'todos') {
                updateContent(projectName);
                setAllTodoModalOpen();
                setProjectCheckMark();
            }

            updateSidebar(projectList);
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