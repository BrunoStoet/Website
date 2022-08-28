const body = document.querySelector("body");
const homeButton = document.querySelector(".home-button");
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
const contactButton = document.querySelector(".contact-button");
const taiChiPdfViewer = document.querySelector(".tai-chi-pdf-viewer");
const readMoreButton = document.querySelector(".read-more");
const section = document.getElementsByTagName("section");
const img = document.getElementsByTagName("img");
taiChiPdfViewer.style.display = "none";
dropdown.style.display = "none";

console.log(img[4].className)
console.log(img[0].style)
function dropdownDisplayer() {
    img[0].className === "hue-shift" ? img[0].className = "" : img[0].className = "hue-shift";
    img[4].className === "hue-shift" ? img[4].className = "" : img[4].className = "hue-shift";
    dropdown.style.display === "none" ? dropdown.style.display = "flex" : dropdown.style.display = "none";
}


hamburger.onclick = dropdownDisplayer;
dropdown.onclick = function () { dropdownDisplayer() };
homeButton.onclick = dropdownDisplayer;
readMoreButton.onclick = function () { taiChiPdfViewer.style.display = "flex" }
taiChiPdfViewer.onclick = function () { taiChiPdfViewer.style.display = "none" }

window.onscroll = function (e) {
    const scrolled = ((window.scrollY / body.offsetHeight) * 100);
    const addImg = "<img src=\"./Media/YingYang.png\"> <span class=\"current-section\">"
    console.log(scrolled)

    switch (Math.floor(scrolled)) {
        case 0:
            homeButton.innerHTML = "<span class=\"current-section\">&nbsp;"
            contactButton.style.backgroundColor = "rgba(0, 0, 0, 0)"
            contactButton.style.color = "#000"
            break;
        case 20:
            homeButton.innerHTML = addImg + "Tai Chi<span>";
            contactButton.style.backgroundColor = "var(--tai-chi-blue)"
            contactButton.style.color = "#fff"
            break;
        case 40:
            homeButton.innerHTML = addImg + "Docenten<span>";
            contactButton.style.backgroundColor = "var(--tai-chi-blue)"
            contactButton.style.color = "#fff"
            break;
        case 60:
            homeButton.innerHTML = addImg + "Rooster<span>";
            contactButton.style.backgroundColor = "var(--tai-chi-blue)"
            contactButton.style.color = "#fff"
            break;
        case 80:
            homeButton.innerHTML = addImg + "Contact<span>";
            contactButton.style.backgroundColor = "rgba(0, 0, 0, 0)"
            contactButton.style.color = "#000"
    }

}
