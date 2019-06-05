
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



