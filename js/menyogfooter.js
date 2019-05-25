

var menuOpen = false;

var timeoutNumber;
document.getElementById("burgermenu").addEventListener("click", function() { 
    let body = document.getElementById("body");
    clearTimeout(timeoutNumber);
    if (menuOpen) {
        menuOpen = false;
        body.classList.remove('menuOpen');
        timeoutNumber = setTimeout(function() {
            body.classList.remove('menuOpening');
        }, 500);
    } else {
        menuOpen = true;
        body.classList.add('menuOpening');
        timeoutNumber = setTimeout(function() {
            body.classList.add('menuOpen');
        }, 0);
    } 
});

document.getElementById("burgermenu__x").addEventListener("click", function() { 
    let body = document.getElementById("body");
    clearTimeout(timeoutNumber);
    if (menuOpen) {
        menuOpen = false;
        body.classList.remove('menuOpen');
        timeoutNumber = setTimeout(function() {
            body.classList.remove('menuOpening');
        }, 500);
    } else {
        menuOpen = true;
        body.classList.add('menuOpening');
        timeoutNumber = setTimeout(function() {
            body.classList.add('menuOpen');
        }, 0);
    } 
});




