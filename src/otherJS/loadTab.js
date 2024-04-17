function loadTab (tabName) {
    $(document).ready(function() {
        $("#content").load(`./htmlCopies/${tabName}.html .main`);
     });
}

export {loadTab};