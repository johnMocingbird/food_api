const url = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR";
const key = "CXHCZ7YbLDKIhSqZ4J6HYQ==GIiWCmCVRbX5Hmm5";

function ajaxApiData() {
  $.ajax({
    url: url,
    method: "GET",
    headers: { "X-Api-Key": key },
    contentType: "application/json",
  }).then(function (response) {
    console.log(response);
  });
}

function fetchApi() {
  const requestUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR";

  fetch(requestUrl, {
    headers: {
      "X-API-KEY": "CXHCZ7YbLDKIhSqZ4J6HYQ==GIiWCmCVRbX5Hmm5",
    },
  })
    .then(function (response) {
      console.log("fetch, line24", response);
      return response.json();
    })
    .then(function (data) {
      console.log("fetch line 28", data);
    });
}

const buttonEL = document
  .getElementById("btn")
  .addEventListener("click", ajaxApiData);

const fetchApiEl = document
  .getElementById("fetch-btn")
  .addEventListener("click", fetchApi);

