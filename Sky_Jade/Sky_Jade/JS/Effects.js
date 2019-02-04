function show(x) {
    document.getElementById(x).style.display='block';
}
function hide(x) {
        document.getElementById(x).style.display='none';
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "4vw";
        document.getElementById("logo").style.width = "10%";
        document.getElementById("navbar").style.borderBottom = "1px solid #9d9d9d";
    } else {
        document.getElementById("navbar").style.height = "6.5vw";
        document.getElementById("logo").style.width = "15%";
        document.getElementById("navbar").style.borderBottom = "0px solid #9d9d9d";
    }
};


var index = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}


