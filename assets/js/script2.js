const ticketMasterKey = `oLCyT4thVDHoA3TZaUi4qbtkL1zuG8kn`;
let artistLink;

//jakes code//
let searchInput = getSearchTermFromLocalStorage();
function getSearchTermFromLocalStorage(){
    return localStorage.getItem('searchTerm');
}
//jakes code//


//skylars code//
function getArtistBackground() {
    let searchTerm = localStorage.getItem('searchTerm');
    console.log(searchTerm);
    let $artistBackgroundAPI =
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchTerm}&api_key=c530cc7409dd0b36d399647084a9eae3&format=json`
  fetch($artistBackgroundAPI)
  .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      console.log(response);
    var artistName = response.artist.name;
    console.log(response);
    var summary = response.artist.bio.summary
    console.log(summary)
    let artistLink = document.getElementById('artist-link')
    artistLink.setAttribute("href",response.artist.url)
    document.getElementById('artist-details').innerHTML = summary
    document.getElementById('artist-name').innerHTML = artistName
  });
}
getArtistBackground();
//skylars code//

//jakes code//
function getArtistEventInfo(buttonSearchTerm){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchInput}&countryCode=US&apikey=${ticketMasterKey}`)
    .then((res) =>{
      res.json().then((data) => {
        console.log(data);
        artistEventDate= data._embedded.events[0].dates.start.localDate;
        artistEventVenue=data._embedded.events[0]._embedded.venues[0].name;
        artistLink=data._embedded.events[0].url;
        setArtistEventInfo();
    })
})
}
getArtistEventInfo();
function setArtistEventInfo(){
    document.getElementById('artistEventDate').innerHTML=artistEventDate;
    document.getElementById('artistEventVenue').innerHTML=artistEventVenue;
    document.getElementById('artistLink').setAttribute("href", artistLink)
    // document.getElementById('artistLink').innerHTML=artistLink;
}
