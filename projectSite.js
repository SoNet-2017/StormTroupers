/**
 * Created by giancarloavalle on 02/04/17.
 */

// cose per slidesjow
var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("headerBlock").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("headerBlock").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
}

function openImage (element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}