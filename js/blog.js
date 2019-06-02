
/*blog nyheter*/

function hoverEffect(id)  {
    var x = document.getElementById("nyhetH" + id);
    var y = document.getElementById("nyhetImg" + id);
    x.classList.add('blog__text_style');
    y.classList.add('blog__img_style');
}

function hoverOff(id) {
    var x = document.getElementById("nyhetH" + id);
    var y = document.getElementById("nyhetImg" + id);
    x.classList.remove('blog__text_style');
    y.classList.remove('blog__img_style');    
}


/*
function hoverOff(id) {
    var x = document.getElementById("nyhetH" + id);
    var y = document.getElementById("nyhetImg" + id);
    if (x.style.color === "black") {
        x.style.color = "#FF5FAF";
        y.style.opacity = "0.7";
        
    } else {
        x.style.color = "black";
        y.style.opacity = "1";
        x.style.textDecoration = "none";
      
    }
}

function hoverEffect(id)  {
    var x = document.getElementById("nyhetH" + id);
    var y = document.getElementById("nyhetImg" + id);

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
}*/


