/*
    Brute force method to have independent gallery actions to different image sets.
    Not ideal, but works. Major problem encountered before was passing HTML collection
    as argument (e.g. ALBA-pics and RAVN-pics), breaks the flow.
*/

var slideIndexAlba, slideIndexRavn, slideIndexAcda;
slideIndexAlba = slideIndexRavn = slideIndexAcda = 1;

// Alba project functions
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

// Ravn project functions
function modalGalleryDeployOnceRavn() {
    showSlidesRavn(slideIndexRavn);
}
function plusSlidesRavn(n) {
    showSlidesRavn(slideIndexRavn += n);
}
function currentSlideRavn(n) {
    showSlidesRavn(slideIndexRavn = n);
}
function showSlidesRavn(n) {
    var i;
    var slides = document.getElementsByClassName("RAVN-pics");
    var dots = document.getElementsByClassName("RAVN-dots");
    var captionText = document.getElementById("RAVN-caption");

    if (n > slides.length) {
        slideIndexRavn = 1;
    }
    if (n < 1) {
        slideIndexRavn = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexRavn-1].style.display = "block";
    dots[slideIndexRavn-1].className += " active";
    captionText.innerHTML = dots[slideIndexRavn-1].alt;
}

// Acda project functions
function modalGalleryDeployOnceAcda() {
    showSlidesAcda(slideIndexAcda);
}
function plusSlidesAcda(n) {
    showSlidesAcda(slideIndexAcda += n);
}
function currentSlideAcda(n) {
    showSlidesAcda(slideIndexAcda = n);
}
function showSlidesAcda(n) {
    var i;
    var slides = document.getElementsByClassName("ACDA-pics");
    var dots = document.getElementsByClassName("ACDA-dots");
    var captionText = document.getElementById("ACDA-caption");

    if (n > slides.length) {
        slideIndexAcda = 1;
    }
    if (n < 1) {
        slideIndexAcda = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexAcda-1].style.display = "block";
    dots[slideIndexAcda-1].className += " active";
    captionText.innerHTML = dots[slideIndexAcda-1].alt;
}