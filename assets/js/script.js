// Trev Code
const trendname = document.querySelectorAll(".trendArt");
// const $search = document.querySelector("#search").value;
function trendingArtist() {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.artists.get?country=US&page_size=5&apikey=bd82708062a53880d8766141cccacee6"
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < 5; i++) {
        trendname[i].innerHTML =
          data.message.body.artist_list[i].artist.artist_name;
        console.log(data.message.body.artist_list[i].artist.artist_name);
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

var displayArtistBackground = function ($inputValEl) {
    if ($inputValEl.length === 0) {
      $inputEl.textContent('$inputEl') = $inputValEl;
      return;
    }
}
    for (var i = 0; i < $inputValEl.length; i++) {
        var inputEl = document.createElement('p');
        $inputEl.classList = 'flex-row';
        $inputEl.setAttribute('href', issues[i].html_url);
        $inputEl.setAttribute('target', '_blank');
        $inputEl.appendChild($inputValEl);

        if ($inputValEl[i].pull_request) {
            $inputEl.textContent = '(Pull request)';
        }   else {
            $inputEl.textContent = '(Issue)';
        }

        inputEl.appendChild($inputValEl);


        console.log(displayArtistBackground);
}



getArtistBackground();
$btn.addEventListener("click", getArtistBackground());
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
