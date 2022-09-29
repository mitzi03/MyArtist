// Trev Code
// function chartsApi() {
// const $search = document.querySelector("#search").value;
fetch(
  "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.artists.get?q_artist=prodigy&page_size=5&apikey=bd82708062a53880d8766141cccacee6"
)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
// }
// trev code
