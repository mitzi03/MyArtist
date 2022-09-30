console.log('hello world')
const ticketMasterKey = 'oLCyT4thVDHoA3TZaUi4qbtkL1zuG8kn';
let eventName, eventName2, eventName3, eventName4,eventName5,eventName6,eventName7;
let date,date2,date3,date4,date5,date6,date7;
let venue, venue2, venue3, venue4, venue5, venue6,venue7;
let searchTerm;
let searchBtn=document.getElementById('searchBtn');
let searchInput = document.querySelector('#search-input');
let searchArray=[];
searchArray=document.getElementById('searchBtn');
// API for the artist background.
//  var $btn = document.getElementById("search"); // btn
// const $inputValEl = document.getElementById("search-input"); // input value
// const $inputEl = document.getElementById("") // where the artist background page will load 
function clickToNewPage(click){
  document.location.href="about.html";
}
function getEventInfo(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&classificationName=concert,music&sort=onSaleStartDate,asc&apikey=${ticketMasterKey}`)
    .then((res) =>{
        res.json().then((data) => {
          console.log(data);
          date = data._embedded.events[0].dates.start.localDate;
          eventName=data._embedded.events[0].name;
          venue= data._embedded.events[0]._embedded.venues[0].name;
          date2 = data._embedded.events[1].dates.start.localDate;
          eventName2=data._embedded.events[1].name;
          venue2=data._embedded.events[1]._embedded.venues[0].name;
          date3 = data._embedded.events[2].dates.start.localDate;
          eventName3=data._embedded.events[2].name;
          venue3= data._embedded.events[2]._embedded.venues[0].name;
          date4 = data._embedded.events[3].dates.start.localDate;
          eventName4=data._embedded.events[3].name;
          venue4= data._embedded.events[3]._embedded.venues[0].name;
          date5 = data._embedded.events[4].dates.start.localDate;
          eventName5=data._embedded.events[4].name;
          venue5= data._embedded.events[4]._embedded.venues[0].name;
          date6 = data._embedded.events[5].dates.start.localDate;
          eventName6=data._embedded.events[5].name;
          venue6= data._embedded.events[5]._embedded.venues[0].name;
          date7 = data._embedded.events[6].dates.start.localDate;
          eventName7=data._embedded.events[6].name;
          venue7= data._embedded.events[6]._embedded.venues[0].name;
        
          setEventInfo();
        })
      })
    }
    getEventInfo();
    
function setEventInfo(){
    document.getElementById('event1').innerHTML=eventName + date + venue;
    document.getElementById('event2').innerHTML=eventName2 + date2 + venue2;
    document.getElementById('event3').innerHTML=eventName3 + date3 + venue3;
    document.getElementById('event4').innerHTML=eventName4 + date4 + venue4;
    document.getElementById('event5').innerHTML=eventName5 + date5 + venue5;
    document.getElementById('event6').innerHTML=eventName6 + date6 + venue6;
    document.getElementById('event7').innerHTML=eventName7 + date7 + venue7;


}

// // API for the artist background.
//  var $btn = document.getElementById("search"); // btn
// const $inputValEl = document.getElementById(""); // input value
// const $inputEl = document.getElementById("") // where the artist background page will load 

// function getArtistBackground() {
//     let $artistBackgroundAPI =
//       `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${$inputValEl}&api_key=c530cc7409dd0b36d399647084a9eae3&format=json`
//   fetch($artistBackgroundAPI)
//   .then(function (data) {
//     console.log(data);
//     return data.json();
//   })
//   .then(function (response) {
//     var artistName = response.artist.name;
//     console.log(artistName);
//   });
// }

// var displayArtistBackground = function ($inputValEl) {
//     if ($inputValEl.length === 0) {
//       $inputEl.textContent = 'No repositories found.';
//       return;
//     }
//   }

// getArtistBackground();
// $btn.addEventListener("click", getArtistBackground);
// getArtistBackground();
// $btn.addEventListener("click", getArtistBackground);


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
//ABOVE IS HAMBURGER MENU
