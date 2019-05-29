
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
