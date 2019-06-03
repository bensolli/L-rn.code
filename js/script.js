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


/*column media query*/

let x = window.matchMedia("(max-width: 990px)")

function myFunction(x) {

    let column = document.getElementsByClassName('colu');
   
    if (x.matches) {

        for(let i = 0; i < column.length; i++){
            column[i].classList.add('col-4');
            column[i].classList.remove('col-3');

        }
    } else {
        
        for(let i = 0; i < column.length; i++){
            column[i].classList.add('col-3');
            column[i].classList.remove('col-4');
        }
    }
  }
  
  myFunction(x)
  x.addListener(myFunction)




/*media query mobile

  let xMobile = window.matchMedia("(max-width: 800px)")


  function myFunctionMobile(xMobile) {
  
  
      let column = document.getElementsByClassName('colu');
     
      if (xMobile.matches) {
  
          for(let i = 0; i < column.length; i++){
              column[i].classList.add('col-6');
              column[i].classList.remove('col-4');
  
          }
      } else {
          
          for(let i = 0; i < column.length; i++){
              column[i].classList.add('col-4');
              column[i].classList.remove('col-6');
          }
      }
    }
    
    myFunctionMobile(xMobile)
    x.addListener(myFunctionMobile)
*/



/*nyhetsbrev validering*/


function validate(id) {
    let regExuserEmail = /^[A-Za-z0-9._-]+@[a-zA-Z0-9+.-]+\.[a-zA-Z]{2,4}$/;
    let email = document.getElementById("epost__nyhetsbrev2").value;
    let errorEmail = document.getElementsByClassName("errormessage__nyhetsbrev" + id);

    if (email.match(regExuserEmail)) {
        errorEmail[0].classList.remove('display_epost_error_message');
        errorEmail[0].classList.add('no_epost_error_message');
        return true;
    } else {
        errorEmail[0].classList.add('display_epost_error_message');
        errorEmail[0].classList.remove('no_epost_error_message');
    }

}














