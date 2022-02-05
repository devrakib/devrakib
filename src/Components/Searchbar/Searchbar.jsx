import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { MovieContext } from "../../Contexts/MovieContext";
import { toast } from "react-toastify";
const Searchbar = () => {
  const { watchlist, watched, addToWatchlist, searched } =
    useContext(MovieContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    //
    // var axios = require("axios").default;

    // var options = {
    //   method: "GET",
    //   url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
    //   params: { s: "Avengers Endgame", r: "json", page: "1" },
    //   headers: {
    //     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    //     "x-rapidapi-key": "86f885278bmshb4d340aa1de6aa3p187d97jsn030b2549c797",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    //

    const results = await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.name.toLowerCase()}`
      )
      .then((res) => {
        console.log(res.data);
        searched(res.data);
        navigate("/searched");
        toast.success("Coctail searched sucssfully.");
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Coctail searched failed.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="flex items-center justify-center w-screen mt-10">
          <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="border-8 border-black-500 rounded-full bg-white shadow flex w-full">
              <input
                type="text"
                placeholder="Find now hot movie..."
                class="w-full rounded-tl-full rounded-bl-full py-2 px-4"
                {...register("name")}
              />
              <button
                type="submit"
                class="bg-yellow-300 rounded-tr-full rounded-br-full py-2 px-4"
              >
                <p class="font-semibold text-base uppercase">Search</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
