import { createContext, useEffect, useReducer } from "react";
import { movieReducer } from "../Reducers/MovieReducer";
//initialstate
const initialState = {
  searchResults: null,
  watchlist: [],
  watched: [],
};
//Context
export const MovieContext = createContext(initialState);

//context Provider
export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //actions
  const searched = (movie) => {
    dispatch({ type: "SEARCHED", payload: movie });
  };
  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const addTowatched = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  };
  const removeCoctail = (mi) => {
    dispatch({ type: "REMOVE", payload: mi });
  };

  return (
    <MovieContext.Provider
      value={{
        searched,
        addToWatchlist,
        addTowatched,
        removeCoctail,
        watchlist: state.watchlist,
        watched: state.watched,
        searchResults: state.searchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
