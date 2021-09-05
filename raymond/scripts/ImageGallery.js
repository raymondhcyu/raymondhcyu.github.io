/*
    Brute force method to have independent gallery actions to different image sets.
    Not ideal, but works. Major problem encountered before was passing HTML collection
    as argument (e.g. ALBA-pics and RAVN-pics), breaks the flow.
*/

var slideIndexAlba, slideIndexRavn, slideIndexAcda, slideIndexMap, slideIndexIndu, slideIndexGcat, slideIndexRckt, slideIndexBdaq, slideIndexSpot, slideIndexAkla, slideIndexUas, slideIndexEcvt, slideIndexUH2;
slideIndexAlba = slideIndexRavn = slideIndexAcda = slideIndexMap = slideIndexIndu = slideIndexGcat = slideIndexRckt = slideIndexBdaq = slideIndexSpot = slideIndexAkla = slideIndexUas = slideIndexEcvt = slideIndexUH2 = 1;

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

    // console.log("Here10")

    if (n > slides.length) {
        slideIndexAlba = 1;
        // console.log("Here11");
    }
    if (n < 1) {
        slideIndexAlba = slides.length;
        // console.log("Here12");
    }
    // console.log("Here12.5");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // console.log("Here13");
    }
    console.log("Here13.5");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        // console.log("Here14");
    }
    slides[slideIndexAlba-1].style.display = "block";
    dots[slideIndexAlba-1].className += " active";
    captionText.innerHTML = dots[slideIndexAlba-1].alt;
    // console.log("Here15");
}

// UH2 project functions
function modalGalleryDeployOnceUH2() {
    showSlidesUH2(slideIndexUH2);
    console.log(slideIndexUh2);
}
function plusSlidesUH2(n) {
    showSlidesUH2(slideIndexUH2 += n);
}
function currentSlideUH2(n) {
    showSlidesUH2(slideIndexUH2 = n);
}
function showSlidesUH2(n) {
    var i;
    var slides = document.getElementsByClassName("UH2-pics");
    var dots = document.getElementsByClassName("UH2-dots");
    var captionText = document.getElementById("UH2-caption");

    if (n > slides.length) {
        slideIndexUH2 = 1;
    }
    if (n < 1) {
        slideIndexUH2 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexUH2-1].style.display = "block";
    dots[slideIndexUH2-1].className += " active";
    captionText.innerHTML = dots[slideIndexUH2-1].alt;
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

// Map project functions
function modalGalleryDeployOnceMap() {
    showSlidesMap(slideIndexMap);
}
function plusSlidesMap(n) {
    showSlidesMap(slideIndexMap += n);
}
function currentSlideMap(n) {
    showSlidesMap(slideIndexMap = n);
}
function showSlidesMap(n) {
    var i;
    var slides = document.getElementsByClassName("MAP-pics");
    var dots = document.getElementsByClassName("MAP-dots");
    var captionText = document.getElementById("MAP-caption");

    if (n > slides.length) {
        slideIndexMap = 1;
    }
    if (n < 1) {
        slideIndexMap = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexMap-1].style.display = "block";
    dots[slideIndexMap-1].className += " active";
    captionText.innerHTML = dots[slideIndexMap-1].alt;
}

// Indu project functions
function modalGalleryDeployOnceIndu() {
    showSlidesIndu(slideIndexIndu);
}
function plusSlidesIndu(n) {
    showSlidesIndu(slideIndexIndu += n);
}
function currentSlideIndu(n) {
    showSlidesIndu(slideIndexIndu = n);
}
function showSlidesIndu(n) {
    var i;
    var slides = document.getElementsByClassName("INDU-pics");
    var dots = document.getElementsByClassName("INDU-dots");
    var captionText = document.getElementById("INDU-caption");

    if (n > slides.length) {
        slideIndexIndu = 1;
    }
    if (n < 1) {
        slideIndexIndu = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexIndu-1].style.display = "block";
    dots[slideIndexIndu-1].className += " active";
    captionText.innerHTML = dots[slideIndexIndu-1].alt;
}

// Gcat project functions
function modalGalleryDeployOnceGcat() {
    showSlidesGcat(slideIndexGcat);
}
function plusSlidesGcat(n) {
    showSlidesGcat(slideIndexGcat += n);
}
function currentSlideGcat(n) {
    showSlidesGcat(slideIndexGcat = n);
}
function showSlidesGcat(n) {
    var i;
    var slides = document.getElementsByClassName("GCAT-pics");
    var dots = document.getElementsByClassName("GCAT-dots");
    var captionText = document.getElementById("GCAT-caption");

    if (n > slides.length) {
        slideIndexGcat = 1;
    }
    if (n < 1) {
        slideIndexGcat = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexGcat-1].style.display = "block";
    dots[slideIndexGcat-1].className += " active";
    captionText.innerHTML = dots[slideIndexGcat-1].alt;
}

// Rckt project functions
function modalGalleryDeployOnceRckt() {
    showSlidesRckt(slideIndexRckt);
}
function plusSlidesRckt(n) {
    showSlidesRckt(slideIndexRckt += n);
}
function currentSlideRckt(n) {
    showSlidesRckt(slideIndexRckt = n);
}
function showSlidesRckt(n) {
    var i;
    var slides = document.getElementsByClassName("RCKT-pics");
    var dots = document.getElementsByClassName("RCKT-dots");
    var captionText = document.getElementById("RCKT-caption");

    if (n > slides.length) {
        slideIndexRckt = 1;
    }
    if (n < 1) {
        slideIndexRckt = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexRckt-1].style.display = "block";
    dots[slideIndexRckt-1].className += " active";
    captionText.innerHTML = dots[slideIndexRckt-1].alt;
}

// Bdaq project functions
function modalGalleryDeployOnceBdaq() {
    showSlidesBdaq(slideIndexBdaq);
}
function plusSlidesBdaq(n) {
    showSlidesBdaq(slideIndexBdaq += n);
}
function currentSlideBdaq(n) {
    showSlidesBdaq(slideIndexBdaq = n);
}
function showSlidesBdaq(n) {
    var i;
    var slides = document.getElementsByClassName("BDAQ-pics");
    var dots = document.getElementsByClassName("BDAQ-dots");
    var captionText = document.getElementById("BDAQ-caption");

    if (n > slides.length) {
        slideIndexBdaq = 1;
    }
    if (n < 1) {
        slideIndexBdaq = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexBdaq-1].style.display = "block";
    dots[slideIndexBdaq-1].className += " active";
    captionText.innerHTML = dots[slideIndexBdaq-1].alt;
}

// Spot project functions
function modalGalleryDeployOnceSpot() {
    showSlidesSpot(slideIndexSpot);
}
function plusSlidesSpot(n) {
    showSlidesSpot(slideIndexSpot += n);
}
function currentSlideSpot(n) {
    showSlidesSpot(slideIndexSpot = n);
}
function showSlidesSpot(n) {
    var i;
    var slides = document.getElementsByClassName("SPOT-pics");
    var dots = document.getElementsByClassName("SPOT-dots");
    var captionText = document.getElementById("SPOT-caption");

    if (n > slides.length) {
        slideIndexSpot = 1;
    }
    if (n < 1) {
        slideIndexSpot = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexSpot-1].style.display = "block";
    dots[slideIndexSpot-1].className += " active";
    captionText.innerHTML = dots[slideIndexSpot-1].alt;
}

// Akla project functions
function modalGalleryDeployOnceAkla() {
    showSlidesAkla(slideIndexAkla);
}
function plusSlidesAkla(n) {
    showSlidesAkla(slideIndexAkla += n);
}
function currentSlideAkla(n) {
    showSlidesAkla(slideIndexAkla = n);
}
function showSlidesAkla(n) {
    var i;
    var slides = document.getElementsByClassName("AKLA-pics");
    var dots = document.getElementsByClassName("AKLA-dots");
    var captionText = document.getElementById("AKLA-caption");

    if (n > slides.length) {
        slideIndexAkla = 1;
    }
    if (n < 1) {
        slideIndexAkla = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexAkla-1].style.display = "block";
    dots[slideIndexAkla-1].className += " active";
    captionText.innerHTML = dots[slideIndexAkla-1].alt;
}

// Uas project functions
function modalGalleryDeployOnceUas() {
    showSlidesUas(slideIndexUas);
}
function plusSlidesUas(n) {
    showSlidesUas(slideIndexUas += n);
}
function currentSlideUas(n) {
    showSlidesUas(slideIndexUas = n);
}
function showSlidesUas(n) {
    var i;
    var slides = document.getElementsByClassName("UAS-pics");
    var dots = document.getElementsByClassName("UAS-dots");
    var captionText = document.getElementById("UAS-caption");

    if (n > slides.length) {
        slideIndexUas = 1;
    }
    if (n < 1) {
        slideIndexUas = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexUas-1].style.display = "block";
    dots[slideIndexUas-1].className += " active";
    captionText.innerHTML = dots[slideIndexUas-1].alt;
}

// ECVT project functions
function modalGalleryDeployOnceEcvt() {
    showSlidesEcvt(slideIndexEcvt);
}
function plusSlidesEcvt(n) {
    showSlidesEcvt(slideIndexEcvt += n);
}
function currentSlideEcvt(n) {
    showSlidesEcvt(slideIndexEcvt = n);
}
function showSlidesEcvt(n) {
    var i;
    var slides = document.getElementsByClassName("ECVT-pics");
    var dots = document.getElementsByClassName("ECVT-dots");
    var captionText = document.getElementById("ECVT-caption");

    if (n > slides.length) {
        slideIndexEcvt = 1;
    }
    if (n < 1) {
        slideIndexEcvt = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexEcvt-1].style.display = "block";
    dots[slideIndexEcvt-1].className += " active";
    captionText.innerHTML = dots[slideIndexEcvt-1].alt;
}