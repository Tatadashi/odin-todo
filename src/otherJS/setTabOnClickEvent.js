import {loadTab} from "./loadTab";

function setTabOnClickEvent (tabName) {
    const aboutTab = document.getElementById(`${tabName}-tab`);
    aboutTab.addEventListener('click', (e) => {
        loadTab(tabName);
    });
}

export {setTabOnClickEvent};