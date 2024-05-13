import { updateContent } from './DOM';
import { project1 } from './default';

//project1 = default
function loadTabHtml (tabName, projectName=project1.title) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`, function() {
            //isDirect is boolean for if clicked directly for project (sidebar) or just the tab
            if (tabName == 'todos') {
                updateContent(projectName);
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