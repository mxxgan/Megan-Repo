window.onscroll = function() {
    let scrolled = (document.documentElement.scrollTop || document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
}


document.getElementById("changeColorBtn").addEventListener("click", function() {
    var button = document.getElementById("changeColorBtn");
    button.style.backgroundColor = button.style.backgroundColor === "pink" ? "blue" : "pink";
});