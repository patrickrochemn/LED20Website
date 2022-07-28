function InitNavigation() {
    let menu_open = document.getElementById('menu-open');
    let menu_close = document.getElementById('menu-close');

    menu_open.addEventListener('click', ShowNavigation, false);
    menu_close.addEventListener('click', HideNavigation, false);
}

function ShowNavigation(event) {
    let menu_items = document.getElementById('menu-items');
    let overlay = document.getElementById('overlay');
    menu_items.style.display = 'block';
    overlay.style.display = 'block';
    setTimeout(() => {
        menu_items.style.left = '0rem';
        overlay.style.opacity = '0.65';
    }, 16);
}

function HideNavigation(event) {
    let menu_items = document.getElementById('menu-items');
    let overlay = document.getElementById('overlay');
    menu_items.style.left = '-18.75rem';
    overlay.style.opacity = '0.0';
    setTimeout(() => {
        menu_items.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);
}

function GetJSON(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                }
                else {
                    reject('Error: File Not Found');
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
}