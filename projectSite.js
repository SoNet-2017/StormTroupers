/**
 * Created by giancarloavalle on 02/04/17.
 */
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