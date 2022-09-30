// Trev Code
const trendname = document.querySelectorAll(".trendname");
// const $search = document.querySelector("#search").value;
fetch(
  "http://api.musixmatch.com/ws/1.1/chart.artists.get?country=US&page_size=10&apikey=bd82708062a53880d8766141cccacee6"
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < 5; i++) {
      trendname[i].textContent =
        data.message.body.artist_list[i].artist.artist_name;
    }
  })
  .catch(function (err) {
    console.log(err);
  });

// trev code

// API for the artist background.
var $btn = document.getElementById("search"); // btn
const $inputValEl = document.getElementById(""); // input value
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

var displayArtistBackground = function ($inputValEl) {
  if ($inputValEl.length === 0) {
    $inputEl.textContent = "No repositories found.";
    return;
  }
};

// getArtistBackground();

// $btn.addEventListener("click", getArtistBackground);
