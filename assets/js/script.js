//trending artists//
 function trendingArtist() {
  const $search = document.querySelector("#search-input").value;
   fetch(
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.artists.get?country=US&page_size=10&apikey=bd82708062a53880d8766141cccacee6"
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < 10; i++) {
        let index = i;
          const artistName = data.message.body.artist_list[i].artist.artist_name;
          const artistId = data.message.body.artist_list[i].artist.artist_id;
          let topAlbum=`<h3 style="font-size: 25px; text-align: center; padding: 5px; font-weight: 500">${artistName}</h3><br>`;
          fetch(
              `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&page_size=1&apikey=bd82708062a53880d8766141cccacee6`
              ).then((response) => response.json()).then(function (data) {
                  console.log(data);
                  topAlbum += `<br><div ><h4>${data.message.body.album_list[0].album.album_name}</h4> `;
                  topAlbum += `<br><h4 style="
                  background: green;
                  text-align: center;
                  font-weight: 600;
                  color: white;">${data.message.body.album_list[0].album.album_rating}</h4><br>`;
                  const date = new Date(data.message.body.album_list[0].album.album_release_date)
                  topAlbum += `<h4>${date}</h4></div>`
                  document.querySelectorAll(".trendArt")[index].innerHTML = topAlbum;
                });
                }
    })
    .catch(function (err) {
      console.log(err);
    });
}
trendingArtist();


// API for the artist background.
var $btn = document.getElementById("search"); // btn
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

function clickToNewPage(){
  document.location.href="about.html";
}


//api get event info
function getEventInfo(){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&classificationName=music&sort=random&apikey=${ticketMasterKey}`)
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

//api set event info
function setEventInfo(){
  document.getElementById('event1').innerHTML=eventName + `<br></br>` + date + `<br></br>` + venue;
  document.getElementById('event2').innerHTML=eventName2 + `<br></br>` + date2 + `<br></br>` + venue2;
  document.getElementById('event3').innerHTML=eventName3 + `<br></br>`+date3 +`<br></br>` + venue3;
  document.getElementById('event4').innerHTML=eventName4 +`<br></br>` + date4 +`<br></br>`+ venue4;
  document.getElementById('event5').innerHTML=eventName5 +`<br></br>`+ date5 +`<br></br>`+ venue5;
  document.getElementById('event6').innerHTML=eventName6 +`<br></br>`+ date6 `<br></br>`+ venue6;
  document.getElementById('event7').innerHTML=eventName7 +`<br></br>`+ date7 +`<br></br>`+ venue7;
}

//search button//
searchBtn.addEventListener('click', getArtistPage);
  async function getArtistPage(buttonSearchTerm){
    searchTerm = searchInput.value
    console.log(searchTerm);
    window.location.href="./assets/about.html";
    localStorage.setItem('searchTerm', searchTerm);
              }
