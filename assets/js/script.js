console.log('hello world')
const ticketMasterKey = 'oLCyT4thVDHoA3TZaUi4qbtkL1zuG8kn';
let eventName;
let date;
let venue;
function getEventInfo(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&classificationName=concert,music&sort=onSaleStartDate,asc&apikey=${ticketMasterKey}`)
    .then((res) =>{
        res.json().then((data) => {
          console.log(data);
          date = data._embedded.events[0].dates.start.localDate;
          eventName=data._embedded.events[0].name;
          venue= data._embedded.events[0]._embedded.venues[0].name;
          console.log(date, eventName, venue);
          // setEventInfo();
        })
      })
    }
    getEventInfo();
    
// function setEventInfo(){
//     document.getElementById('events').innerHTML=eventName + date + venue;

// }
// API for the artist background.
 var $btn = document.getElementById("search"); // btn
const $inputValEl = document.getElementById(""); // input value
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

var displayArtistBackground = function ($inputValEl) {
    if ($inputValEl.length === 0) {
      $inputEl.textContent = 'No repositories found.';
      return;
    }
  }
getArtistBackground();
$btn.addEventListener("click", getArtistBackground);
