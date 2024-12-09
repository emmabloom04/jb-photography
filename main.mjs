import pictures from "./pictures.mjs";


// js for portfolio subpage
function imageTemplate(picture) {
    return `<img src="${picture.src}" alt="${picture.alt}">`
}

function renderPictures(pictureList) {
    let pictureGrid = document.querySelector(".picture-grid");
    let html = "";
    pictureList.forEach(function (picture) {
        html += imageTemplate(picture);
    })
    pictureGrid.innerHTML = html;
}
const inputField = document.querySelector("input");

function searchHandler(event) {
    event.preventDefault();
    let query = inputField.value.toLowerCase();
    let filteredPictures = filter(pictures, query);
    renderPictures(filteredPictures);
}

function filter(list, query) {
    function searchCallback(item) {
        return (item.tags.find((tag) => tag.toLowerCase().includes(query)))
    }
    const filtered = list.filter(searchCallback);
    return filtered;
}

let slideIndex = 0;
if (document.title == "Josh Bloomfield Photography") {

    showSlides();

}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

if (document.title == "Portfolio") {

    renderPictures(pictures);
    const search = document.querySelector(".search-icon");

    search.addEventListener("click", searchHandler);
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
        searchHandler(event);
        }
    });

}