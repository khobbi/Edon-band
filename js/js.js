var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var image = document.getElementsByClassName("slideshow-img");
    for(i = 0; i < image.length; i++){
        image[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > image.length){slideIndex = 1}
    image[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000) //change image every 2s
}