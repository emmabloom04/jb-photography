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

renderPictures(pictures);
const search = document.querySelector(".search-icon");

search.addEventListener("click", searchHandler);
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchHandler(event);
    }
  });