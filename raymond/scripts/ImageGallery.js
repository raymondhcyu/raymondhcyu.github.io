var slideIndexAlba = 1;

function modalGalleryDeployOnceAlba() {
    showSlidesAlba(slideIndexAlba);
}

function plusSlidesAlba(n) {
    showSlidesAlba(slideIndexAlba += n);
}

function currentSlideAlba(n) {
    showSlidesAlba(slideIndexAlba = n);
}

function showSlidesAlba(n) {
    var i;
    var slides = document.getElementsByClassName("ALBA-pics");

    console.log(slides);

    var dots = document.getElementsByClassName("ALBA-dots");
    var captionText = document.getElementById("ALBA-caption");

    console.log("Here10")

    if (n > slides.length) {
        slideIndexAlba = 1;
        console.log("Here11");
    }
    if (n < 1) {
        slideIndexAlba = slides.length;
        console.log("Here12");
    }
    console.log("Here12.5");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log("Here13");
    }
    console.log("Here13.5");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        console.log("Here14");
    }
    slides[slideIndexAlba-1].style.display = "block";
    dots[slideIndexAlba-1].className += " active";
    captionText.innerHTML = dots[slideIndexAlba-1].alt;
    console.log("Here15");
}