function responsive_menu() {
    var x = document.getElementById("r_topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
}