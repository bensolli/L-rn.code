

/*hamburger menu*/

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
}



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




/*graphs*/
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
ChartsNinja_d808cf50afcf4323dacab6f861edf90d();





/*kontakt*/
function validate() {
    let regExuserName = /^[A-Z a-z]+$/;
    let regExuserEmail = /^[A-Za-z0-9._-]+@[a-zA-Z0-9+.-]+\.[a-zA-Z]{2,4}$/;
    let regExuserSubject = /^[A-Z a-z]+$/;

    let firstName = document.getElementById("name").value;
    let email = document.getElementById("epost").value;
    let textBox = document.getElementById("subject").value;

    let errorName = document.getElementsByClassName("errormessage__name");
    let errorEmail = document.getElementsByClassName("errormessage__email");
    let errorTextBox = document.getElementsByClassName("errormessage__textbox");


    if (firstName.match(regExuserName)) {
        errorName[0].classList.remove('display_name_error_message');
        errorName[0].classList.add('no_name_error_message');
        return true;
    } else {
        errorName[0].classList.add('display_name_error_message');
        errorName[0].classList.remove('no_name_error_message');
    }

    if (email.match(regExuserEmail)) {
        errorEmail[0].classList.remove('display_epost_error_message');
        errorEmail[0].classList.add('no_epost_error_message');
        return true;
    } else {
        errorEmail[0].classList.add('display_epost_error_message');
        errorEmail[0].classList.remove('no_epost_error_message');
    }

    if (textBox.match(regExuserSubject)) {
        errorTextBox[0].classList.remove('display_textbox_error_message');
        errorTextBox[0].classList.add('no_textbox_error_message');
        return true;
    } else {
        errorTextBox[0].classList.add('display_textbox_error_message');
        errorTextBox[0].classList.remove('no_textbox_error_message');
    }
}

document.getElementById("submitcontact").addEventListener("click", validate);


/*
document.getElementById("submitcontact").addEventListener("click", function() {

    if (validate()) {
        return (alert("its submitted"));
    }
    else {
        return false;
    }
});*/



