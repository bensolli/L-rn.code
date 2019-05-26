

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


/*blog nyheter*/
function hoverOff() {
    var x = document.getElementById("nyhetH");
    var y = document.getElementById("nyhetImg");
    if (x.style.color === "black") {
        x.style.color = "#FF5FAF";
        y.style.opacity = "0.7";
        
    } else {
        x.style.color = "black";
        y.style.opacity = "1";
        x.style.textDecoration = "none";
      
    }
}

function hoverEffect()  {
    var x = document.getElementById("nyhetH");
    var y = document.getElementById("nyhetImg");
    if (x.style.color === "#FF5FAF") {
        x.style.color = "black";
        x.style.transition = "0.5s";
        y.style.opacity = "1";
        y.style.transition = "0.5s";
    } else {
        x.style.color = "#FF5FAF";
        y.style.opacity = "0.7";
        x.style.transition = "0.5s";
        y.style.transition = "0.5s";
        x.style.textDecoration = "underline";
      
    }
}

function hoverOff1() {
var x = document.getElementById("nyhetH1");
var y = document.getElementById("nyhetImg1");
if (x.style.color === "black") {
x.style.color = "#FF5FAF";
y.style.opacity = "0.7";

} else {
x.style.color = "black";
y.style.opacity = "1";
x.style.textDecoration = "none";

}
}

function hoverEffect1()  {
var x = document.getElementById("nyhetH1");
var y = document.getElementById("nyhetImg1");
if (x.style.color === "#FF5FAF") {
x.style.color = "black";
x.style.transition = "0.5s";
y.style.opacity = "1";
y.style.transition = "0.5s";
} else {
x.style.color = "##FF5FAF";
y.style.opacity = "0.7";
x.style.transition = "0.5s";
y.style.transition = "0.5s";
x.style.textDecoration = "underline";

}
}

function hoverOff2() {
var x = document.getElementById("nyhetH2");
var y = document.getElementById("nyhetImg2");
if (x.style.color === "black") {
x.style.color = "#FF5FAF";
y.style.opacity = "0.7";

} else {
x.style.color = "black";
y.style.opacity = "1";
x.style.textDecoration = "none";

}
}

function hoverEffect2()  {
var x = document.getElementById("nyhetH2");
var y = document.getElementById("nyhetImg2");
if (x.style.color === "#FF5FAF") {
x.style.color = "black";
x.style.transition = "0.5s";
y.style.opacity = "1";
y.style.transition = "0.5s";
} else {
x.style.color = "#FF5FAF";
y.style.opacity = "0.7";
x.style.transition = "0.5s";
y.style.transition = "0.5s";
x.style.textDecoration = "underline";

}
}


