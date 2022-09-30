// Trev Code
const trendname = document.querySelectorAll(".trendname");
// const $search = document.querySelector("#search").value;
function trendingArtist() {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.artists.get?q_artist=prodigy&page_size=5&apikey=bd82708062a53880d8766141cccacee6"
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < 5; i++) {
        trendname[i].textContent = data;
        console.log(data);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
trendingArtist();
// trev code

// API for the artist background.
var $btn = document.getElementById("search"); // btn
const $inputValEl = document.getElementById("search-input"); // input value
const $inputEl = document.getElementById(""); // where the artist background page will load

function getArtistBackground() {
  let $artistBackgroundAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${$inputValEl}&api_key=c530cc7409dd0b36d399647084a9eae3&format=json`;
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

// // /THIS IS SO WE CAN DO THE HAMBURGER MENU MAYBE//
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("toggle-navbar").addEventListener("click", () => {
//     const element = document.getElementById("nav-items");
//     if (element.classList.contains("block")) {
//       element.classList.remove("block");
//       element.classList.add("hidden");
//     } else {
//       element.classList.remove("hidden");
//       element.classList.add("block");
//     }
//   });
// });
// //ABOVE IS HAMBURGER MENU
