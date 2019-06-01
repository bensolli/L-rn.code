/*Podcast slider*/
function myFunction_slider(id) {
    var x = document.getElementsByClassName("slider__content" + id);
    var y = document.getElementById("slider_btn_number" + id);
    
   
    var isOpen = x[0].classList.contains('slider__content__open');
    /*close content*/
    var contentOpen = document.getElementsByClassName("slider__content__open");
    for(let i = 0; i < contentOpen.length; i++){
        contentOpen[i].classList.add('slider__content__closed');
        contentOpen[i].classList.remove('slider__content__open');
    }

    /*close wrapper*/
    var wrapperOpen = document.getElementsByClassName("slider__wrapper__open");
    for(let i = 0; i < wrapperOpen.length; i++){
        wrapperOpen[i].classList.remove('slider__wrapper__open');
    }

    if (isOpen) {
        x[0].classList.add('slider__content__closed');
        x[0].classList.remove('slider__content__open');
        y.classList.remove('slider__wrapper__open');
       
    } else {
        x[0].classList.add('slider__content__open');
        x[0].classList.remove('slider__content__closed');
        y.classList.add('slider__wrapper__open');
    }
}