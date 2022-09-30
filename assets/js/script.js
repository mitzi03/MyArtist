// API for the artist background.
 var $btn = document.getElementById("search"); // btn
const $inputValEl = document.getElementById("search-input"); // input value
const $inputEl = document.getElementById("") // where the artist background page will load 

function getArtistBackground() {
    let $artistBackgroundAPI =
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${$inputValEl}&api_key=c530cc7409dd0b36d399647084a9eae3&format=json`
  fetch($artistBackgroundAPI)
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (response) {
    var artistName = response.artist.name;
    console.log(artistName);
  });
}

getArtistBackground();
$btn.addEventListener("click", getArtistBackground);


// /THIS IS SO WE CAN DO THE HAMBURGER MENU MAYBE//
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle-navbar").addEventListener("click", () => {
    const element = document.getElementById("nav-items");
    if (element.classList.contains("block")) {
      element.classList.remove("block");
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
      element.classList.add("block");
    }
  });
});
//ABOVE IS HAMBURGER MENU
