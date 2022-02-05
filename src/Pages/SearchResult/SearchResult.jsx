import React, { useContext } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../Contexts/MovieContext";
const SearchResult = () => {
  const { searchResults, addToWatchlist } = useContext(MovieContext);

  const addToWatchlistHandler = (m) => {
    try {
      addToWatchlist(m);
      toast.success(`${m.strDrink} added to wishlist.`);
    } catch {
      toast.warning(`${m.strDrink} added to wishlist failed.`);
    }
  };
  return (
    <div>
      {/* movie list */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {searchResults !== null ? (
              searchResults.drinks.map((m) => (
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src={m.strDrinkThumb}
                    />
                  </div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {m.strCategory}
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {m.strDrink}
                    </h2>
                    <p class="mt-1">{m.strAlcoholic}</p>

                    <button
                      onClick={() => addToWatchlistHandler(m)}
                      type="button"
                      class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      I want try
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2>Item not found.</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResult;
