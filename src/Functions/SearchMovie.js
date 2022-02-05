import axios from "axios";

var options = {
  method: "GET",
  url: "https://advanced-movie-search.p.rapidapi.com/search/movie",
  params: { query: "kong", page: "1" },
  headers: {
    "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
    "x-rapidapi-key": "86f885278bmshb4d340aa1de6aa3p187d97jsn030b2549c797",
  },
};



axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
