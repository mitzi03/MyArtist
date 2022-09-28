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
          console.log(artistName.value);
          date = data._embedded.events[0].dates.start.localDate;
          eventName=data._embedded.events[0].name;
          venue= data._embedded.events[0]._embedded.venues[0].name;
          console.log(date, eventName, venue);
          setEventInfo();
        })
      })
    }
    getEventInfo();
    
function setEventInfo(){
    document.getElementById('events').innerHTML=eventName + date + venue;

}
