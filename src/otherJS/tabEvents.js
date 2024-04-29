function loadTabHtml (tabName) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`);
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

export {setAllTabOnClickEvents};