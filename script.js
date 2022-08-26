const body = document.querySelector("body");
const homeButton = document.querySelector(".home-button");
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
dropdown.style.display = "none";

function dropdownDisplayer() {
    dropdown.style.display === "none" ? dropdown.style.display = "flex" : dropdown.style.display = "none";
}

hamburger.onclick = dropdownDisplayer;
dropdown.onclick = function () { dropdown.style.display = "none" };
homeButton.onclick = dropdownDisplayer;


window.onscroll = function (e) {
    const scrolled = ((window.scrollY / body.offsetHeight) * 100);
    const addImg = "<img src=\"./Media/YingYang.png\"> <span class=\"current-section\">"
    console.log(scrolled)

    switch (Math.floor(scrolled)) {
        case 0:
            homeButton.innerHTML = "<span class=\"current-section\">&nbsp;"
            break;
        case 20:
            homeButton.innerHTML = addImg + "Tai Chi<span>";
            break;
        case 40:
            homeButton.innerHTML = addImg + "Docenten<span>";
            break;
        case 60:
            homeButton.innerHTML = addImg + "Rooster<span>";
            break;
        case 80:
            homeButton.innerHTML = addImg + "Contact<span>";
    }

}
