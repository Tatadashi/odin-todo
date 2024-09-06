import { updateContent, updateSidebar } from './DOM';
import { defaultProject, projectList } from './default';
import { setProjectCheckMark } from './form';
import { setAllTodoModalOpen } from './modalTodoInfo';

function loadTabHtml (tabName, projectName=defaultProject.title) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`, function() {
            if (tabName == 'todos') {
                updateContent(projectName);
                setProjectCheckMark();
                setAllTodoModalOpen();
                setSortButtonEvents();
            }

            updateSidebar(projectList);
            setSidebarTabOnClickEvents();
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

function setSidebarTabOnClickEvents () {
    const sidebarProjectDivs = document.querySelectorAll('.sidebar-project-div');

    sidebarProjectDivs.forEach(projectDiv => {
        const projectName = projectDiv.children[0].textContent;

        projectDiv.addEventListener('click', (e) => {
            loadTabHtml('todos', projectName)
        });
    });
}

//when sort button clicked, all todos onclick works (Actual sorting part is in different fn in DOM.js)
function setSortButtonEvents () {
    const sortButton = document.getElementById('sort-button');

    sortButton.addEventListener('click', (e) => {
        setAllTodoModalOpen();
    });
}

export { setAllTabOnClickEvents, loadTabHtml };