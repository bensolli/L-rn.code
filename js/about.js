/*about board*/
function myFunction_people(id) {
    var x = document.getElementsByClassName("about__people__content" + id);
    var y = document.getElementById("about__people__wrapper" + id);
    
   
    var isOpen = x[0].classList.contains('about__people__content__open');
    /*close content*/
    var contentOpen = document.getElementsByClassName("about__people__content__open");
    for(let i = 0; i < contentOpen.length; i++){
        contentOpen[i].classList.add('about__people__content__closed');
        contentOpen[i].classList.remove('about__people__content__open');
    }

    /*close wrapper*/
    var wrapperOpen = document.getElementsByClassName("about__people__wrapper__open");
    for(let i = 0; i < wrapperOpen.length; i++){
        wrapperOpen[i].classList.remove('about__people__wrapper__open');
    }

    if (isOpen) {
        x[0].classList.add('about__people__content__closed');
        x[0].classList.remove('about__people__content__open');
        y.classList.remove('about__people__wrapper__open');
       
    } else {
        x[0].classList.add('about__people__content__open');
        x[0].classList.remove('about__people__content__closed');
        y.classList.add('about__people__wrapper__open');
    }
}


/*about dropdown*/
function myFunction_dropdown(id) {
    var x = document.getElementsByClassName("about__dropwdown__content" + id);
    var y = document.getElementById("about__dropdown__btn" + id);
    var o = document.getElementById("arrow--rotate" + id);
    
    

    var isOpen = x[0].classList.contains('about__dropdown__btn__content__open');
    /*close content*/
    var contentOpen = document.getElementsByClassName("about__dropdown__btn__content__open");
    for(let i = 0; i < contentOpen.length; i++){
        contentOpen[i].classList.add('about__dropwdown__content__closed');
        contentOpen[i].classList.remove('about__dropdown__btn__content__open');
    }

    /*close wrapper*/
    var wrapperOpen = document.getElementsByClassName("about__dropdown__btn__open");
    for(let i = 0; i < wrapperOpen.length; i++){
        wrapperOpen[i].classList.remove('about__dropdown__btn__open');
    }


    var arrowOpen = document.getElementsByClassName("arrow__rotate");
    for(let i = 0; i < arrowOpen.length; i++){
        arrowOpen[i].classList.remove('arrow__rotate');
    }

    if (isOpen) {
        x[0].classList.add('about__dropwdown__content__closed');
        x[0].classList.remove('about__dropdown__btn__content__open');
        y.classList.remove('about__dropdown__btn__open')
        o.classList.remove('arrow__rotate');;
       
    } else {
        x[0].classList.add('about__dropdown__btn__content__open');
        x[0].classList.remove('about__dropwdown__content__closed');
        y.classList.add('about__dropdown__btn__open');
        o.classList.add('arrow__rotate');
    }
}




/*graphs
var ChartsNinja_d808cf50afcf4323dacab6f861edf90d = function() {
    var cnElm = document.getElementById('ChartsNinja_d808cf50afcf4323dacab6f861edf90d');
    if (cnElm) {
        cnElm.innerHTML = '<iframe style="width: 100%; min-height: 400px; height: 400px; border: none; margin: 0; padding: 0;" src="https://charts.commoninja.com/api/viewer/d808cf50afcf4323dacab6f861edf90d"></iframe>';
    } else {
        console.log('Charts Ninja element "ChartsNinja_d808cf50afcf4323dacab6f861edf90d" not found.');
    }
};
ChartsNinja_d808cf50afcf4323dacab6f861edf90d();


var ChartsNinja_ed4c09c2a21c850c79f2472e8062bce0 = function() {
    var cnElm = document.getElementById('ChartsNinja_ed4c09c2a21c850c79f2472e8062bce0');
    if (cnElm) {
        cnElm.innerHTML = '<iframe style="width: 100%; min-height: 400px; height: 400px; border: none; margin: 0; padding: 0;" src="https://charts.commoninja.com/api/viewer/ed4c09c2a21c850c79f2472e8062bce0"></iframe>';
    } else {
        console.log('Charts Ninja element "ChartsNinja_ed4c09c2a21c850c79f2472e8062bce0" not found.');
    }
};
ChartsNinja_ed4c09c2a21c850c79f2472e8062bce0();

var ChartsNinja_d808cf50afcf4323dacab6f861edf90d = function() {
    var cnElm = document.getElementById('ChartsNinja_d808cf50afcf4323dacab6f861edf90d');
    if (cnElm) {
        cnElm.innerHTML = '<iframe style="width: 100%; min-height: 400px; height: 400px; border: none; margin: 0; padding: 0;" src="https://charts.commoninja.com/api/viewer/d808cf50afcf4323dacab6f861edf90d"></iframe>';
    } else {
        console.log('Charts Ninja element "ChartsNinja_d808cf50afcf4323dacab6f861edf90d" not found.');
    }
};
ChartsNinja_d808cf50afcf4323dacab6f861edf90d();*/
