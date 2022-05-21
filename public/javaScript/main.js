function searchUpdate() {
    let searchbar = document.getElementById("search");
    let categories = document.getElementById("categories");
    searchbar.placeholder = "Search " + categories.value;
}

let STATE = 0;

function toggleMenu() {
    let menu = document.getElementById("Menu")
    if (STATE) {
        menu.style.left = '-210px'
        STATE = 0
    } else {
        menu.style.left = '0px'
        STATE = 1
    }
}
